import os
import sys
import json
import urllib.parse
import requests
import psycopg2
import pandas as pd
from dotenv import load_dotenv


if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

# Încarca .env din folderul proiectului
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, ".env"))


def require_env(key, default=None):
    """Citește o variabilă din .env și oprește scriptul dacă lipsește."""
    value = os.getenv(key, default)
    if value is None or value.strip() == "":
        raise SystemExit(
            f"[config] Variabila '{key}' lipsește din .env. "
            f"Completează-o în {os.path.join(BASE_DIR, '.env')} și reia."
        )
    return value.strip()


def require_port(key, default="5432"):
    raw = require_env(key, default)
    try:
        return int(raw)
    except ValueError:
        raise SystemExit(f"[config] Variabila '{key}' trebuie să fie un număr, dar este: {raw!r}")



DB_CONFIG = {
    "host": require_env("DB_HOST", "localhost"),
    "port": require_port("DB_PORT"),
    "dbname": require_env("DB_NAME"),
    "user": require_env("DB_USER"),
    "password": require_env("DB_PASSWORD"),
}


GOOGLE_BOOKS_API_KEY = os.getenv("GOOGLE_BOOKS_API_KEY", "").strip()
GOOGLE_BOOKS_USER_AGENT = require_env(
    "GOOGLE_BOOKS_USER_AGENT", "BookshelfInspector/1.0"
)
WIKIPEDIA_USER_AGENT = require_env(
    "WIKIPEDIA_USER_AGENT", "BookshelfInspector/1.0"
)
REQUEST_TIMEOUT = require_port("REQUEST_TIMEOUT", "4")


def google_books_url(query):
    url = f"https://www.googleapis.com/books/v1/volumes?q={query}"
    if GOOGLE_BOOKS_API_KEY:
        url += f"&key={GOOGLE_BOOKS_API_KEY}"
    return url

# Functie pentru preluare coperta si rezumat din Google Books
def fetch_book_metadata(isbn, title="", author=""):
    headers = {"User-Agent": GOOGLE_BOOKS_USER_AGENT}
    url = google_books_url(f"isbn:{isbn}")
    try:
        response = requests.get(url, headers=headers, timeout=REQUEST_TIMEOUT)
        if response.status_code == 200:
            data = response.json()
            if "items" in data and len(data["items"]) > 0:
                vol = data["items"][0].get("volumeInfo", {})
                desc = vol.get("description")
                img = vol.get("imageLinks", {}).get("thumbnail")
                if desc:
                    return {"synopsis": desc, "cover": img}
    except Exception:
        pass

    if title and author:
        clean_t = urllib.parse.quote(title)
        clean_a = urllib.parse.quote(author)
        url_fb = google_books_url(f"intitle:{clean_t}+inauthor:{clean_a}")
        try:
            res_fb = requests.get(url_fb, headers=headers, timeout=REQUEST_TIMEOUT)
            if res_fb.status_code == 200:
                data_fb = res_fb.json()
                if "items" in data_fb and len(data_fb["items"]) > 0:
                    vol = data_fb["items"][0].get("volumeInfo", {})
                    if vol.get("description"):
                        return {"synopsis": vol.get("description"), "cover": vol.get("imageLinks", {}).get("thumbnail")}
        except Exception:
            pass

    return {"synopsis": None, "cover": None}

# Functie pentru preluare biografie autor din Wikipedia
def fetch_author_bio(author_name):
    clean_name = urllib.parse.quote(author_name.replace(" ", "_"))
    url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{clean_name}"
    headers = {"User-Agent": WIKIPEDIA_USER_AGENT}
    try:
        res = requests.get(url, headers=headers, timeout=REQUEST_TIMEOUT)
        if res.status_code == 200:
            return res.json().get("extract")
    except Exception:
        pass
    return None

print("Conectare la baza de date PostgreSQL...")
conn = psycopg2.connect(**DB_CONFIG)


query = """
WITH users_countries AS (
    SELECT 
        user_id,
        LOWER(TRIM(SPLIT_PART(location, ',', 3))) AS country
    FROM users
    WHERE location IS NOT NULL AND location <> ''
),
books_metrics AS (
    SELECT 
        tb.isbn,
        tb.book_title,
        INITCAP(TRIM(tb.book_author)) AS book_author,
        tb.image_url_l,
        COUNT(tr.book_rating) AS total_reviews,
        ROUND(AVG(tr.book_rating)::numeric, 2) AS avg_book_rating,
        COUNT(DISTINCT us.country) AS countries_count
    FROM ratings AS tr
    JOIN books AS tb ON tr.isbn = tb.isbn
    LEFT JOIN users_countries AS us ON tr.user_id = us.user_id
    WHERE tr.book_rating > 0
    GROUP BY tb.isbn, tb.book_title, INITCAP(TRIM(tb.book_author)), tb.image_url_l
    HAVING COUNT(tr.book_rating) >= 100
       AND COUNT(DISTINCT us.country) >= 5
),
author_metrics AS (
    SELECT 
        INITCAP(TRIM(tb.book_author)) AS book_author,
        COUNT(tr.book_rating) AS total_reviews_author,
        ROUND(AVG(tr.book_rating)::numeric, 2) AS avg_rating_author,
        COUNT(DISTINCT us.country) AS author_countries_count
    FROM ratings AS tr
    JOIN books AS tb ON tr.isbn = tb.isbn
    LEFT JOIN users_countries AS us ON tr.user_id = us.user_id
    WHERE tr.book_rating > 0
    GROUP BY INITCAP(TRIM(tb.book_author))
    HAVING COUNT(tr.book_rating) >= 150
),
ranked_books AS (
    SELECT 
        bm.isbn,
        bm.book_title,
        bm.book_author,
        bm.image_url_l,
        bm.total_reviews,
        bm.avg_book_rating,
        bm.countries_count,
        ROUND((bm.avg_book_rating * 0.6 + (LN(bm.total_reviews) * 0.8))::numeric, 2) AS composite_score,
        ROW_NUMBER() OVER(
            PARTITION BY bm.book_author
            ORDER BY bm.avg_book_rating DESC, bm.total_reviews DESC
        ) AS author_book_rank
    FROM books_metrics AS bm
)
SELECT 
    rb.isbn,
    rb.book_title,
    rb.book_author,
    rb.image_url_l,
    rb.total_reviews,
    rb.avg_book_rating,
    rb.countries_count AS diff_countries,
    am.total_reviews_author,
    am.avg_rating_author,
    rb.composite_score
FROM ranked_books AS rb
JOIN author_metrics AS am ON rb.book_author = am.book_author
WHERE rb.author_book_rank = 1
ORDER BY rb.composite_score DESC;
"""

print("Extragere date...")
df = pd.read_sql(query, conn)
conn.close()
print(f"S-au extras {len(df)} cărți calificate din PostgreSQL.")

enriched_results = []
author_cache = {}

for idx, row in df.iterrows():
    isbn = str(row['isbn'])
    title = str(row['book_title'])
    author = str(row['book_author'])
    
    synopsis = None
    api_cover = None

    
    if idx < 10:
        print(f"[{idx+1}/10] Preluare date externe pentru: {title}")
        api_data = fetch_book_metadata(isbn, title, author)
        synopsis = api_data["synopsis"]
        api_cover = api_data["cover"]
        if author not in author_cache:
            author_cache[author] = fetch_author_bio(author)

    db_cover = row['image_url_l'] if pd.notna(row['image_url_l']) and str(row['image_url_l']).strip() != '' else None
    cover = api_cover if api_cover else (db_cover if db_cover else 'https://via.placeholder.com/110x165?text=No+Cover')

    final_synopsis = synopsis if synopsis else f"Curated title with verified ratings across {int(row['diff_countries'])} countries and {int(row['total_reviews'])} reviews."
    final_bio = author_cache.get(author) if author_cache.get(author) else f"Author with an average rating of {float(row['avg_rating_author'])}/10 from {int(row['total_reviews_author'])} verified readers."

    enriched_results.append({
        "book_details": {
            "isbn": isbn,
            "title": title,
            "composite_score": float(row['composite_score']),
            "book_rating": float(row['avg_book_rating']),
            "book_reviews": int(row['total_reviews']),
            "distinct_countries": int(row['diff_countries']),
            "cover_image": cover,
            "synopsis": final_synopsis
        },
        "author_details": {
            "name": author,
            "author_rating": float(row['avg_rating_author']),
            "author_reviews": int(row['total_reviews_author']),
            "biography": final_bio
        }
    })

output_dir = os.path.join(BASE_DIR, "js")
os.makedirs(output_dir, exist_ok=True)
with open(os.path.join(output_dir, "data.js"), "w", encoding="utf-8") as f:
    f.write(f"const enrichedData = {json.dumps(enriched_results, indent=4, ensure_ascii=False)};")

print(f"\nSalvat cu succes în {os.path.join(output_dir, 'data.js')} ({len(enriched_results)} înregistrări)!")