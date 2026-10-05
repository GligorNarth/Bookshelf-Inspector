const enrichedData = [
    {
        "book_details": {
            "isbn": "0385504209",
            "title": "The Da Vinci Code",
            "composite_score": 10.57,
            "book_rating": 8.44,
            "book_reviews": 974,
            "distinct_countries": 29,
            "cover_image": "http://images.amazon.com/images/P/0385504209.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 29 countries and 974 reviews."
        },
        "author_details": {
            "name": "Dan Brown",
            "author_rating": 8.12,
            "author_reviews": 2230,
            "biography": "Daniel Gerhard Brown is an American writer best known for his thriller novels, particularly the Robert Langdon series Angels & Demons (2000), The Da Vinci Code (2003), The Lost Symbol (2009), Inferno (2013), Origin (2017) and The Secret of Secrets (2025). His novels are treasure hunts that usually take place over a 24-hour period and center on recurring themes of cryptography, art, and conspiracy theories."
        }
    },
    {
        "book_details": {
            "isbn": "0312195516",
            "title": "The Red Tent (Bestselling Backlist)",
            "composite_score": 10.22,
            "book_rating": 8.18,
            "book_reviews": 766,
            "distinct_countries": 20,
            "cover_image": "http://images.amazon.com/images/P/0312195516.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 20 countries and 766 reviews."
        },
        "author_details": {
            "name": "Anita Diamant",
            "author_rating": 8.1,
            "author_reviews": 884,
            "biography": "Anita Diamant is an American journalist and writer of fiction and non-fiction books."
        }
    },
    {
        "book_details": {
            "isbn": "0446310786",
            "title": "To Kill a Mockingbird",
            "composite_score": 10.21,
            "book_rating": 8.94,
            "book_reviews": 428,
            "distinct_countries": 16,
            "cover_image": "http://images.amazon.com/images/P/0446310786.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 16 countries and 428 reviews."
        },
        "author_details": {
            "name": "Harper Lee",
            "author_rating": 8.99,
            "author_reviews": 562,
            "biography": "Nelle Harper Lee was an American novelist whose 1960 novel To Kill a Mockingbird won the 1961 Pulitzer Prize and became a classic of modern American literature. She assisted her close friend Truman Capote in his research for the book In Cold Blood (1966). An earlier draft of Mockingbird, set at a later date, Go Set a Watchman, was published in July 2015 as a sequel. A collection of her short stories and essays, The Land of Sweet Forever, was published on October 21, 2025."
        }
    },
    {
        "book_details": {
            "isbn": "0439139597",
            "title": "Harry Potter and the Goblet of Fire (Book 4)",
            "composite_score": 10.05,
            "book_rating": 9.26,
            "book_reviews": 274,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/0439139597.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 274 reviews."
        },
        "author_details": {
            "name": "J. K. Rowling",
            "author_rating": 8.97,
            "author_reviews": 3492,
            "biography": "Joanne Rowling, better known by her pen name J. K. Rowling, is a British author, philanthropist, producer, and screenwriter. She is best known for writing Harry Potter, a seven-volume series about a young wizard and the best-selling book series in history, with over 600 million copies sold. She also writes Cormoran Strike, an ongoing crime fiction series, under the alias Robert Galbraith."
        }
    },
    {
        "book_details": {
            "isbn": "0446672211",
            "title": "Where the Heart Is (Oprah's Book Club (Paperback))",
            "composite_score": 9.99,
            "book_rating": 8.14,
            "book_reviews": 590,
            "distinct_countries": 17,
            "cover_image": "http://images.amazon.com/images/P/0446672211.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 17 countries and 590 reviews."
        },
        "author_details": {
            "name": "Billie Letts",
            "author_rating": 8.07,
            "author_reviews": 784,
            "biography": "Billie Dean Letts was an American novelist and educator. She was a professor at Southeastern Oklahoma State University."
        }
    },
    {
        "book_details": {
            "isbn": "0385484518",
            "title": "Tuesdays with Morrie: An Old Man, a Young Man, and Life's Greatest Lesson",
            "composite_score": 9.97,
            "book_rating": 8.62,
            "book_reviews": 400,
            "distinct_countries": 15,
            "cover_image": "http://images.amazon.com/images/P/0385484518.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 15 countries and 400 reviews."
        },
        "author_details": {
            "name": "Mitch Albom",
            "author_rating": 8.32,
            "author_reviews": 1020,
            "biography": "Mitchell David Albom is an American author, sports journalist, talk show host, and philanthropist. As of 2021, his books are reported to have sold 40 million copies worldwide. Having achieved national recognition as a sports journalist early on in his writing career, Albom turned to writing inspirational stories and themes—a preeminent early one being Tuesdays with Morrie."
        }
    },
    {
        "book_details": {
            "isbn": "0060928336",
            "title": "Divine Secrets of the Ya-Ya Sisterhood: A Novel",
            "composite_score": 9.9,
            "book_rating": 7.89,
            "book_reviews": 640,
            "distinct_countries": 14,
            "cover_image": "http://images.amazon.com/images/P/0060928336.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 14 countries and 640 reviews."
        },
        "author_details": {
            "name": "Rebecca Wells",
            "author_rating": 7.76,
            "author_reviews": 1566,
            "biography": "Rebecca Wells is an American author, actor, and playwright known for the Ya-Ya Sisterhood series, which includes the books Divine Secrets of the Ya-Ya Sisterhood, Little Altars Everywhere, Ya-Yas in Bloom, and The Crowning Glory of Calla Lily Ponder."
        }
    },
    {
        "book_details": {
            "isbn": "0345361792",
            "title": "A Prayer for Owen Meany",
            "composite_score": 9.88,
            "book_rating": 8.61,
            "book_reviews": 362,
            "distinct_countries": 17,
            "cover_image": "http://images.amazon.com/images/P/0345361792.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 17 countries and 362 reviews."
        },
        "author_details": {
            "name": "John Irving",
            "author_rating": 7.87,
            "author_reviews": 1780,
            "biography": "John Winslow Irving is an American and Canadian novelist, short story writer, and screenwriter."
        }
    },
    {
        "book_details": {
            "isbn": "0452282152",
            "title": "Girl with a Pearl Earring",
            "composite_score": 9.84,
            "book_rating": 7.98,
            "book_reviews": 556,
            "distinct_countries": 14,
            "cover_image": "http://images.amazon.com/images/P/0452282152.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 14 countries and 556 reviews."
        },
        "author_details": {
            "name": "Tracy Chevalier",
            "author_rating": 7.88,
            "author_reviews": 1012,
            "biography": "Tracy Rose Chevalier is an American-British novelist. She is best known for her second novel, Girl with a Pearl Earring, which was adapted as a 2003 film starring Scarlett Johansson and Colin Firth."
        }
    },
    {
        "book_details": {
            "isbn": "0345342968",
            "title": "Fahrenheit 451",
            "composite_score": 9.81,
            "book_rating": 8.63,
            "book_reviews": 328,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0345342968.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 328 reviews."
        },
        "author_details": {
            "name": "Ray Bradbury",
            "author_rating": 8.2,
            "author_reviews": 998,
            "biography": "Ray Douglas Bradbury was an American author and screenwriter. One of the most celebrated 20th-century American writers, he worked in a variety of genres, including fantasy, science fiction, horror, mystery, and realistic fiction."
        }
    },
    {
        "book_details": {
            "isbn": "0743418174",
            "title": "Good in Bed",
            "composite_score": 9.76,
            "book_rating": 8.05,
            "book_reviews": 472,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/0743418174.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 472 reviews."
        },
        "author_details": {
            "name": "Jennifer Weiner",
            "author_rating": 7.94,
            "author_reviews": 682,
            "biography": "Author with an average rating of 7.94/10 from 682 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0804106304",
            "title": "The Joy Luck Club",
            "composite_score": 9.69,
            "book_rating": 8.2,
            "book_reviews": 388,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/0804106304.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 388 reviews."
        },
        "author_details": {
            "name": "Amy Tan",
            "author_rating": 8.04,
            "author_reviews": 1374,
            "biography": "Author with an average rating of 8.04/10 from 1374 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "067976402X",
            "title": "Snow Falling on Cedars",
            "composite_score": 9.68,
            "book_rating": 7.81,
            "book_reviews": 512,
            "distinct_countries": 16,
            "cover_image": "http://images.amazon.com/images/P/067976402X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 16 countries and 512 reviews."
        },
        "author_details": {
            "name": "David Guterson",
            "author_rating": 7.67,
            "author_reviews": 702,
            "biography": "Author with an average rating of 7.67/10 from 702 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0812550706",
            "title": "Ender's Game (Ender Wiggins Saga (Paperback))",
            "composite_score": 9.67,
            "book_rating": 8.84,
            "book_reviews": 234,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/0812550706.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 234 reviews."
        },
        "author_details": {
            "name": "Orson Scott Card",
            "author_rating": 8.11,
            "author_reviews": 1400,
            "biography": "Author with an average rating of 8.11/10 from 1400 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0345339738",
            "title": "The Return of the King (The Lord of the Rings, Part 3)",
            "composite_score": 9.67,
            "book_rating": 9.4,
            "book_reviews": 154,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0345339738.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 154 reviews."
        },
        "author_details": {
            "name": "J.R.R. Tolkien",
            "author_rating": 8.82,
            "author_reviews": 1308,
            "biography": "Author with an average rating of 8.82/10 from 1308 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0060938455",
            "title": "Fast Food Nation: The Dark Side of the All-American Meal",
            "composite_score": 9.64,
            "book_rating": 8.42,
            "book_reviews": 308,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0060938455.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 308 reviews."
        },
        "author_details": {
            "name": "Eric Schlosser",
            "author_rating": 8.36,
            "author_reviews": 390,
            "biography": "Author with an average rating of 8.36/10 from 390 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0316769487",
            "title": "The Catcher in the Rye",
            "composite_score": 9.56,
            "book_rating": 7.69,
            "book_reviews": 486,
            "distinct_countries": 15,
            "cover_image": "http://images.amazon.com/images/P/0316769487.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 15 countries and 486 reviews."
        },
        "author_details": {
            "name": "J.D. Salinger",
            "author_rating": 7.76,
            "author_reviews": 668,
            "biography": "Author with an average rating of 7.76/10 from 668 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0451524934",
            "title": "1984",
            "composite_score": 9.51,
            "book_rating": 8.77,
            "book_reviews": 202,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0451524934.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 202 reviews."
        },
        "author_details": {
            "name": "George Orwell",
            "author_rating": 8.41,
            "author_reviews": 738,
            "biography": "Author with an average rating of 8.41/10 from 738 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0060934417",
            "title": "Bel Canto: A Novel",
            "composite_score": 9.5,
            "book_rating": 8.15,
            "book_reviews": 318,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/0060934417.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 318 reviews."
        },
        "author_details": {
            "name": "Ann Patchett",
            "author_rating": 7.92,
            "author_reviews": 526,
            "biography": "Author with an average rating of 7.92/10 from 526 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0684874350",
            "title": "ANGELA'S ASHES",
            "composite_score": 9.49,
            "book_rating": 8.39,
            "book_reviews": 264,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0684874350.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 264 reviews."
        },
        "author_details": {
            "name": "Frank Mccourt",
            "author_rating": 7.98,
            "author_reviews": 1220,
            "biography": "Author with an average rating of 7.98/10 from 1220 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0060915544",
            "title": "The Bean Trees",
            "composite_score": 9.48,
            "book_rating": 8.52,
            "book_reviews": 234,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0060915544.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 234 reviews."
        },
        "author_details": {
            "name": "Barbara Kingsolver",
            "author_rating": 8.2,
            "author_reviews": 2016,
            "biography": "Author with an average rating of 8.2/10 from 2016 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0449005615",
            "title": "Seabiscuit: An American Legend",
            "composite_score": 9.47,
            "book_rating": 8.48,
            "book_reviews": 240,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0449005615.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 240 reviews."
        },
        "author_details": {
            "name": "Laura Hillenbrand",
            "author_rating": 8.4,
            "author_reviews": 390,
            "biography": "Author with an average rating of 8.4/10 from 390 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0440219078",
            "title": "The Giver (21st Century Reference)",
            "composite_score": 9.44,
            "book_rating": 8.66,
            "book_reviews": 202,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0440219078.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 202 reviews."
        },
        "author_details": {
            "name": "Lois Lowry",
            "author_rating": 8.56,
            "author_reviews": 504,
            "biography": "Author with an average rating of 8.56/10 from 504 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0440212561",
            "title": "Outlander",
            "composite_score": 9.43,
            "book_rating": 8.58,
            "book_reviews": 210,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0440212561.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 210 reviews."
        },
        "author_details": {
            "name": "Diana Gabaldon",
            "author_rating": 8.54,
            "author_reviews": 786,
            "biography": "Author with an average rating of 8.54/10 from 786 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0449212602",
            "title": "The Handmaid's Tale",
            "composite_score": 9.42,
            "book_rating": 8.5,
            "book_reviews": 222,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0449212602.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 222 reviews."
        },
        "author_details": {
            "name": "Margaret Atwood",
            "author_rating": 7.82,
            "author_reviews": 1380,
            "biography": "Author with an average rating of 7.82/10 from 1380 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0805063897",
            "title": "Nickel and Dimed: On (Not) Getting By in America",
            "composite_score": 9.42,
            "book_rating": 8.25,
            "book_reviews": 268,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0805063897.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 268 reviews."
        },
        "author_details": {
            "name": "Barbara Ehrenreich",
            "author_rating": 8.25,
            "author_reviews": 354,
            "biography": "Author with an average rating of 8.25/10 from 354 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0380002930",
            "title": "Watership Down",
            "composite_score": 9.41,
            "book_rating": 8.62,
            "book_reviews": 200,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/0380002930.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 200 reviews."
        },
        "author_details": {
            "name": "Richard Adams",
            "author_rating": 8.17,
            "author_reviews": 378,
            "biography": "Author with an average rating of 8.17/10 from 378 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0312278586",
            "title": "The Nanny Diaries: A Novel",
            "composite_score": 9.41,
            "book_rating": 7.54,
            "book_reviews": 452,
            "distinct_countries": 13,
            "cover_image": "http://images.amazon.com/images/P/0312278586.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 13 countries and 452 reviews."
        },
        "author_details": {
            "name": "Emma Mclaughlin",
            "author_rating": 7.44,
            "author_reviews": 790,
            "biography": "Author with an average rating of 7.44/10 from 790 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0440498058",
            "title": "A Wrinkle In Time",
            "composite_score": 9.4,
            "book_rating": 8.88,
            "book_reviews": 162,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0440498058.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 162 reviews."
        },
        "author_details": {
            "name": "Madeleine L'Engle",
            "author_rating": 8.37,
            "author_reviews": 780,
            "biography": "Author with an average rating of 8.37/10 from 780 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0441172717",
            "title": "Dune (Remembering Tomorrow)",
            "composite_score": 9.39,
            "book_rating": 8.97,
            "book_reviews": 150,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0441172717.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 150 reviews."
        },
        "author_details": {
            "name": "Frank Herbert",
            "author_rating": 8.11,
            "author_reviews": 710,
            "biography": "Author with an average rating of 8.11/10 from 710 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0316096199",
            "title": "Lucky : A Memoir",
            "composite_score": 9.39,
            "book_rating": 8.2,
            "book_reviews": 266,
            "distinct_countries": 13,
            "cover_image": "http://images.amazon.com/images/P/0316096199.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 13 countries and 266 reviews."
        },
        "author_details": {
            "name": "Alice Sebold",
            "author_rating": 8.17,
            "author_reviews": 1856,
            "biography": "Author with an average rating of 8.17/10 from 1856 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0440226430",
            "title": "Summer Sisters",
            "composite_score": 9.38,
            "book_rating": 7.56,
            "book_reviews": 428,
            "distinct_countries": 16,
            "cover_image": "http://images.amazon.com/images/P/0440226430.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 16 countries and 428 reviews."
        },
        "author_details": {
            "name": "Judy Blume",
            "author_rating": 7.44,
            "author_reviews": 1312,
            "biography": "Author with an average rating of 7.44/10 from 1312 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0064400557",
            "title": "Charlotte's Web (Trophy Newbery)",
            "composite_score": 9.37,
            "book_rating": 9.07,
            "book_reviews": 136,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0064400557.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 136 reviews."
        },
        "author_details": {
            "name": "E. B. White",
            "author_rating": 8.85,
            "author_reviews": 312,
            "biography": "Author with an average rating of 8.85/10 from 312 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0312924585",
            "title": "Silence of the Lambs",
            "composite_score": 9.35,
            "book_rating": 8.37,
            "book_reviews": 224,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/0312924585.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 224 reviews."
        },
        "author_details": {
            "name": "Thomas Harris",
            "author_rating": 7.73,
            "author_reviews": 1136,
            "biography": "Author with an average rating of 7.73/10 from 1136 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0385492081",
            "title": "Into Thin Air : A Personal Account of the Mt. Everest Disaster",
            "composite_score": 9.35,
            "book_rating": 8.09,
            "book_reviews": 276,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0385492081.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 276 reviews."
        },
        "author_details": {
            "name": "Jon Krakauer",
            "author_rating": 8.09,
            "author_reviews": 780,
            "biography": "Author with an average rating of 8.09/10 from 780 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0060987103",
            "title": "Wicked: The Life and Times of the Wicked Witch of the West",
            "composite_score": 9.32,
            "book_rating": 7.87,
            "book_reviews": 312,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0060987103.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 312 reviews."
        },
        "author_details": {
            "name": "Gregory Maguire",
            "author_rating": 7.58,
            "author_reviews": 688,
            "biography": "Author with an average rating of 7.58/10 from 688 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0375727345",
            "title": "House of Sand and Fog",
            "composite_score": 9.3,
            "book_rating": 7.33,
            "book_reviews": 458,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/0375727345.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 458 reviews."
        },
        "author_details": {
            "name": "Andre Dubus Iii",
            "author_rating": 7.38,
            "author_reviews": 490,
            "biography": "Author with an average rating of 7.38/10 from 490 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0345348036",
            "title": "The Princess Bride: S Morgenstern's Classic Tale of True Love and High Adventure",
            "composite_score": 9.3,
            "book_rating": 8.84,
            "book_reviews": 148,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0345348036.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 148 reviews."
        },
        "author_details": {
            "name": "William Goldman",
            "author_rating": 8.54,
            "author_reviews": 250,
            "biography": "Author with an average rating of 8.54/10 from 250 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553272535",
            "title": "Night",
            "composite_score": 9.29,
            "book_rating": 8.53,
            "book_reviews": 184,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0553272535.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 184 reviews."
        },
        "author_details": {
            "name": "Elie Wiesel",
            "author_rating": 8.36,
            "author_reviews": 252,
            "biography": "Author with an average rating of 8.36/10 from 252 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0671041789",
            "title": "The Green Mile",
            "composite_score": 9.28,
            "book_rating": 8.49,
            "book_reviews": 188,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/0671041789.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 188 reviews."
        },
        "author_details": {
            "name": "Stephen King",
            "author_rating": 7.82,
            "author_reviews": 9406,
            "biography": "Author with an average rating of 7.82/10 from 9406 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0070212570",
            "title": "Fried Green Tomatoes at the Whistle Stop Cafe",
            "composite_score": 9.27,
            "book_rating": 8.59,
            "book_reviews": 172,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0070212570.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 172 reviews."
        },
        "author_details": {
            "name": "Fannie Flagg",
            "author_rating": 8.03,
            "author_reviews": 750,
            "biography": "Author with an average rating of 8.03/10 from 750 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0345350499",
            "title": "The Mists of Avalon",
            "composite_score": 9.27,
            "book_rating": 8.64,
            "book_reviews": 166,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0345350499.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 166 reviews."
        },
        "author_details": {
            "name": "Marion Zimmer Bradley",
            "author_rating": 7.79,
            "author_reviews": 1086,
            "biography": "Author with an average rating of 7.79/10 from 1086 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553375407",
            "title": "Ishmael: An Adventure of the Mind and Spirit",
            "composite_score": 9.27,
            "book_rating": 8.46,
            "book_reviews": 188,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/0553375407.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 188 reviews."
        },
        "author_details": {
            "name": "Daniel Quinn",
            "author_rating": 8.4,
            "author_reviews": 352,
            "biography": "Author with an average rating of 8.4/10 from 352 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "1400031354",
            "title": "Tears of the Giraffe (No.1 Ladies Detective Agency)",
            "composite_score": 9.27,
            "book_rating": 8.45,
            "book_reviews": 190,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/1400031354.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 190 reviews."
        },
        "author_details": {
            "name": "Alexander Mccall Smith",
            "author_rating": 8.25,
            "author_reviews": 852,
            "biography": "Author with an average rating of 8.25/10 from 852 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0385722206",
            "title": "Balzac and the Little Chinese Seamstress : A Novel",
            "composite_score": 9.25,
            "book_rating": 8.02,
            "book_reviews": 258,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0385722206.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 258 reviews."
        },
        "author_details": {
            "name": "Dai Sijie",
            "author_rating": 8.03,
            "author_reviews": 402,
            "biography": "Author with an average rating of 8.03/10 from 402 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "068484477X",
            "title": "STONES FROM THE RIVER",
            "composite_score": 9.25,
            "book_rating": 8.06,
            "book_reviews": 250,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/068484477X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 250 reviews."
        },
        "author_details": {
            "name": "Ursula Hegi",
            "author_rating": 7.9,
            "author_reviews": 440,
            "biography": "Author with an average rating of 7.9/10 from 440 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553296981",
            "title": "Anne Frank: The Diary of a Young Girl",
            "composite_score": 9.25,
            "book_rating": 8.7,
            "book_reviews": 154,
            "distinct_countries": 13,
            "cover_image": "http://images.amazon.com/images/P/0553296981.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 13 countries and 154 reviews."
        },
        "author_details": {
            "name": "Anne Frank",
            "author_rating": 8.73,
            "author_reviews": 358,
            "biography": "Author with an average rating of 8.73/10 from 358 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0440414806",
            "title": "Holes (Yearling Newbery)",
            "composite_score": 9.22,
            "book_rating": 8.66,
            "book_reviews": 152,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0440414806.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 152 reviews."
        },
        "author_details": {
            "name": "Louis Sachar",
            "author_rating": 8.26,
            "author_reviews": 438,
            "biography": "Author with an average rating of 8.26/10 from 438 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0375706771",
            "title": "Midwives: A Novel",
            "composite_score": 9.22,
            "book_rating": 7.73,
            "book_reviews": 306,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0375706771.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 306 reviews."
        },
        "author_details": {
            "name": "Chris Bohjalian",
            "author_rating": 7.65,
            "author_reviews": 504,
            "biography": "Author with an average rating of 7.65/10 from 504 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0767902521",
            "title": "A Walk in the Woods: Rediscovering America on the Appalachian Trail (Official Guides to the Appalachian Trail)",
            "composite_score": 9.21,
            "book_rating": 8.21,
            "book_reviews": 212,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0767902521.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 212 reviews."
        },
        "author_details": {
            "name": "Bill Bryson",
            "author_rating": 8.01,
            "author_reviews": 1014,
            "biography": "Author with an average rating of 8.01/10 from 1014 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0671510053",
            "title": "SHIPPING NEWS",
            "composite_score": 9.2,
            "book_rating": 7.73,
            "book_reviews": 300,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/0671510053.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 300 reviews."
        },
        "author_details": {
            "name": "Annie Proulx",
            "author_rating": 7.5,
            "author_reviews": 676,
            "biography": "Author with an average rating of 7.5/10 from 676 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0743227441",
            "title": "The Other Boleyn Girl",
            "composite_score": 9.19,
            "book_rating": 8.43,
            "book_reviews": 176,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0743227441.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 176 reviews."
        },
        "author_details": {
            "name": "Philippa Gregory",
            "author_rating": 8.29,
            "author_reviews": 260,
            "biography": "Author with an average rating of 8.29/10 from 260 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0842329218",
            "title": "Tribulation Force: The Continuing Drama of Those Left Behind (Left Behind No. 2)",
            "composite_score": 9.16,
            "book_rating": 8.41,
            "book_reviews": 172,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0842329218.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 172 reviews."
        },
        "author_details": {
            "name": "Tim Lahaye",
            "author_rating": 8.05,
            "author_reviews": 1264,
            "biography": "Author with an average rating of 8.05/10 from 1264 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0451166892",
            "title": "The Pillars of the Earth",
            "composite_score": 9.16,
            "book_rating": 8.39,
            "book_reviews": 174,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/0451166892.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 174 reviews."
        },
        "author_details": {
            "name": "Ken Follett",
            "author_rating": 7.54,
            "author_reviews": 1282,
            "biography": "Author with an average rating of 7.54/10 from 1282 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0446532231",
            "title": "Dude, Where's My Country?",
            "composite_score": 9.15,
            "book_rating": 8.34,
            "book_reviews": 178,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0446532231.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 178 reviews."
        },
        "author_details": {
            "name": "Michael Moore",
            "author_rating": 7.84,
            "author_reviews": 716,
            "biography": "Author with an average rating of 7.84/10 from 716 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0375726403",
            "title": "Empire Falls",
            "composite_score": 9.13,
            "book_rating": 7.65,
            "book_reviews": 290,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0375726403.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 290 reviews."
        },
        "author_details": {
            "name": "Richard Russo",
            "author_rating": 7.81,
            "author_reviews": 536,
            "biography": "Author with an average rating of 7.81/10 from 536 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0142001430",
            "title": "Year of Wonders",
            "composite_score": 9.13,
            "book_rating": 8.32,
            "book_reviews": 176,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0142001430.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 176 reviews."
        },
        "author_details": {
            "name": "Geraldine Brooks",
            "author_rating": 8.14,
            "author_reviews": 274,
            "biography": "Author with an average rating of 8.14/10 from 274 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0062502182",
            "title": "The Alchemist: A Fable About Following Your Dream",
            "composite_score": 9.13,
            "book_rating": 8.08,
            "book_reviews": 210,
            "distinct_countries": 15,
            "cover_image": "http://images.amazon.com/images/P/0062502182.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 15 countries and 210 reviews."
        },
        "author_details": {
            "name": "Paulo Coelho",
            "author_rating": 7.81,
            "author_reviews": 612,
            "biography": "Author with an average rating of 7.81/10 from 612 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0380813815",
            "title": "Lamb : The Gospel According to Biff, Christ's Childhood Pal",
            "composite_score": 9.12,
            "book_rating": 8.79,
            "book_reviews": 122,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0380813815.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 122 reviews."
        },
        "author_details": {
            "name": "Christopher Moore",
            "author_rating": 8.12,
            "author_reviews": 596,
            "biography": "Author with an average rating of 8.12/10 from 596 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "1573225789",
            "title": "The Color of Water: A Black Man's Tribute to His White Mother",
            "composite_score": 9.12,
            "book_rating": 8.25,
            "book_reviews": 184,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/1573225789.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 184 reviews."
        },
        "author_details": {
            "name": "James Mcbride",
            "author_rating": 8.15,
            "author_reviews": 244,
            "biography": "Author with an average rating of 8.15/10 from 244 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0399501487",
            "title": "Lord of the Flies",
            "composite_score": 9.09,
            "book_rating": 7.99,
            "book_reviews": 216,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/0399501487.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 216 reviews."
        },
        "author_details": {
            "name": "William Gerald Golding",
            "author_rating": 7.95,
            "author_reviews": 218,
            "biography": "Author with an average rating of 7.95/10 from 218 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0156528207",
            "title": "The Little Prince",
            "composite_score": 9.09,
            "book_rating": 8.98,
            "book_reviews": 102,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0156528207.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 102 reviews."
        },
        "author_details": {
            "name": "Antoine De Saint-Exupã©Ry",
            "author_rating": 9.03,
            "author_reviews": 342,
            "biography": "Author with an average rating of 9.03/10 from 342 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "014028009X",
            "title": "Bridget Jones's Diary",
            "composite_score": 9.09,
            "book_rating": 7.73,
            "book_reviews": 262,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/014028009X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 262 reviews."
        },
        "author_details": {
            "name": "Helen Fielding",
            "author_rating": 7.54,
            "author_reviews": 1368,
            "biography": "Author with an average rating of 7.54/10 from 1368 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0440180295",
            "title": "Slaughterhouse Five or the Children's Crusade: A Duty Dance With Death",
            "composite_score": 9.09,
            "book_rating": 8.34,
            "book_reviews": 166,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0440180295.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 166 reviews."
        },
        "author_details": {
            "name": "Kurt Vonnegut",
            "author_rating": 8.03,
            "author_reviews": 826,
            "biography": "Author with an average rating of 8.03/10 from 826 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "055321313X",
            "title": "Anne of Green Gables (Anne of Green Gables Novels (Paperback))",
            "composite_score": 9.08,
            "book_rating": 8.91,
            "book_reviews": 106,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/055321313X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 106 reviews."
        },
        "author_details": {
            "name": "L.M. Montgomery",
            "author_rating": 8.88,
            "author_reviews": 626,
            "biography": "Author with an average rating of 8.88/10 from 626 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "044651652X",
            "title": "The Bridges of Madison County",
            "composite_score": 9.08,
            "book_rating": 7.51,
            "book_reviews": 304,
            "distinct_countries": 13,
            "cover_image": "http://images.amazon.com/images/P/044651652X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 13 countries and 304 reviews."
        },
        "author_details": {
            "name": "Robert James Waller",
            "author_rating": 7.15,
            "author_reviews": 688,
            "biography": "Author with an average rating of 7.15/10 from 688 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0525947647",
            "title": "Lies and the Lying Liars Who Tell Them: A Fair and Balanced Look at the Right",
            "composite_score": 9.07,
            "book_rating": 8.62,
            "book_reviews": 130,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0525947647.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 130 reviews."
        },
        "author_details": {
            "name": "Al Franken",
            "author_rating": 7.93,
            "author_reviews": 258,
            "biography": "Author with an average rating of 7.93/10 from 258 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0151008116",
            "title": "Life of Pi",
            "composite_score": 9.07,
            "book_rating": 8.14,
            "book_reviews": 188,
            "distinct_countries": 15,
            "cover_image": "http://images.amazon.com/images/P/0151008116.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 15 countries and 188 reviews."
        },
        "author_details": {
            "name": "Yann Martel",
            "author_rating": 8.08,
            "author_reviews": 700,
            "biography": "Author with an average rating of 8.08/10 from 700 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553250426",
            "title": "The Clan of the Cave Bear (Earth's Children (Paperback))",
            "composite_score": 9.07,
            "book_rating": 8.21,
            "book_reviews": 178,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0553250426.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 178 reviews."
        },
        "author_details": {
            "name": "Jean M. Auel",
            "author_rating": 7.83,
            "author_reviews": 988,
            "biography": "Author with an average rating of 7.83/10 from 988 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0140067477",
            "title": "The Tao of Pooh",
            "composite_score": 9.07,
            "book_rating": 8.04,
            "book_reviews": 202,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0140067477.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 202 reviews."
        },
        "author_details": {
            "name": "Benjamin Hoff",
            "author_rating": 7.91,
            "author_reviews": 322,
            "biography": "Author with an average rating of 7.91/10 from 322 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0312282990",
            "title": "The Amazing Adventures of Kavalier &amp; Clay",
            "composite_score": 9.06,
            "book_rating": 8.11,
            "book_reviews": 188,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0312282990.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 188 reviews."
        },
        "author_details": {
            "name": "Michael Chabon",
            "author_rating": 7.92,
            "author_reviews": 330,
            "biography": "Author with an average rating of 7.92/10 from 330 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553572997",
            "title": "The Alienist",
            "composite_score": 9.05,
            "book_rating": 7.77,
            "book_reviews": 240,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/0553572997.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 240 reviews."
        },
        "author_details": {
            "name": "Caleb Carr",
            "author_rating": 7.21,
            "author_reviews": 512,
            "biography": "Author with an average rating of 7.21/10 from 512 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0671617028",
            "title": "The Color Purple",
            "composite_score": 9.03,
            "book_rating": 8.69,
            "book_reviews": 118,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0671617028.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 118 reviews."
        },
        "author_details": {
            "name": "Alice Walker",
            "author_rating": 7.89,
            "author_reviews": 748,
            "biography": "Author with an average rating of 7.89/10 from 748 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0312305060",
            "title": "The Hours: A Novel",
            "composite_score": 9.02,
            "book_rating": 7.63,
            "book_reviews": 258,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/0312305060.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 258 reviews."
        },
        "author_details": {
            "name": "Michael Cunningham",
            "author_rating": 7.64,
            "author_reviews": 520,
            "biography": "Author with an average rating of 7.64/10 from 520 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0099771519",
            "title": "Memoirs of a Geisha Uk",
            "composite_score": 9.02,
            "book_rating": 8.17,
            "book_reviews": 172,
            "distinct_countries": 17,
            "cover_image": "http://images.amazon.com/images/P/0099771519.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 17 countries and 172 reviews."
        },
        "author_details": {
            "name": "Arthur Golden",
            "author_rating": 8.28,
            "author_reviews": 318,
            "biography": "Author with an average rating of 8.28/10 from 318 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0060391626",
            "title": "I Know This Much Is True (Oprah's Book Club)",
            "composite_score": 9.02,
            "book_rating": 8.36,
            "book_reviews": 150,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0060391626.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 150 reviews."
        },
        "author_details": {
            "name": "Wally Lamb",
            "author_rating": 7.86,
            "author_reviews": 1290,
            "biography": "Author with an average rating of 7.86/10 from 1290 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0345391802",
            "title": "The Hitchhiker's Guide to the Galaxy",
            "composite_score": 9.02,
            "book_rating": 8.4,
            "book_reviews": 144,
            "distinct_countries": 13,
            "cover_image": "http://images.amazon.com/images/P/0345391802.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 13 countries and 144 reviews."
        },
        "author_details": {
            "name": "Douglas Adams",
            "author_rating": 8.33,
            "author_reviews": 1496,
            "biography": "Author with an average rating of 8.33/10 from 1496 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0312265867",
            "title": "To the Nines: A Stephanie Plum Novel",
            "composite_score": 9.01,
            "book_rating": 8.7,
            "book_reviews": 114,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0312265867.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 114 reviews."
        },
        "author_details": {
            "name": "Janet Evanovich",
            "author_rating": 7.94,
            "author_reviews": 2980,
            "biography": "Author with an average rating of 7.94/10 from 2980 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0385335881",
            "title": "Shopaholic Takes Manhattan (Summer Display Opportunity)",
            "composite_score": 9.01,
            "book_rating": 8.1,
            "book_reviews": 178,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/0385335881.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 178 reviews."
        },
        "author_details": {
            "name": "Sophie Kinsella",
            "author_rating": 7.88,
            "author_reviews": 806,
            "biography": "Author with an average rating of 7.88/10 from 806 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "039592720X",
            "title": "Interpreter of Maladies",
            "composite_score": 9.01,
            "book_rating": 8.36,
            "book_reviews": 148,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/039592720X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 148 reviews."
        },
        "author_details": {
            "name": "Jhumpa Lahiri",
            "author_rating": 8.47,
            "author_reviews": 208,
            "biography": "Author with an average rating of 8.47/10 from 208 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0345384466",
            "title": "The Witching Hour (Lives of the Mayfair Witches)",
            "composite_score": 8.99,
            "book_rating": 7.96,
            "book_reviews": 194,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0345384466.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 194 reviews."
        },
        "author_details": {
            "name": "Anne Rice",
            "author_rating": 7.47,
            "author_reviews": 3260,
            "biography": "Author with an average rating of 7.47/10 from 3260 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0440236703",
            "title": "Tell No One",
            "composite_score": 8.98,
            "book_rating": 8.04,
            "book_reviews": 180,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0440236703.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 180 reviews."
        },
        "author_details": {
            "name": "Harlan Coben",
            "author_rating": 8.14,
            "author_reviews": 564,
            "biography": "Author with an average rating of 8.14/10 from 564 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0440222656",
            "title": "The Horse Whisperer",
            "composite_score": 8.98,
            "book_rating": 7.45,
            "book_reviews": 280,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0440222656.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 280 reviews."
        },
        "author_details": {
            "name": "Nicholas Evans",
            "author_rating": 7.37,
            "author_reviews": 878,
            "biography": "Author with an average rating of 7.37/10 from 878 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0670894605",
            "title": "The Secret Life of Bees",
            "composite_score": 8.97,
            "book_rating": 8.52,
            "book_reviews": 124,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0670894605.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 124 reviews."
        },
        "author_details": {
            "name": "Sue Monk Kidd",
            "author_rating": 8.47,
            "author_reviews": 816,
            "biography": "Author with an average rating of 8.47/10 from 816 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0679429220",
            "title": "Midnight in the Garden of Good and Evil: A Savannah Story",
            "composite_score": 8.97,
            "book_rating": 7.79,
            "book_reviews": 214,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0679429220.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 214 reviews."
        },
        "author_details": {
            "name": "John Berendt",
            "author_rating": 7.65,
            "author_reviews": 384,
            "biography": "Author with an average rating of 7.65/10 from 384 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "080410526X",
            "title": "All I Really Need to Know",
            "composite_score": 8.97,
            "book_rating": 7.99,
            "book_reviews": 186,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/080410526X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 186 reviews."
        },
        "author_details": {
            "name": "Robert Fulghum",
            "author_rating": 7.92,
            "author_reviews": 534,
            "biography": "Author with an average rating of 7.92/10 from 534 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0441790348",
            "title": "Stranger in a Strange Land (Remembering Tomorrow)",
            "composite_score": 8.97,
            "book_rating": 8.33,
            "book_reviews": 144,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0441790348.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 144 reviews."
        },
        "author_details": {
            "name": "Robert A. Heinlein",
            "author_rating": 7.99,
            "author_reviews": 770,
            "biography": "Author with an average rating of 7.99/10 from 770 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0743237188",
            "title": "Fall On Your Knees (Oprah #45)",
            "composite_score": 8.97,
            "book_rating": 7.57,
            "book_reviews": 254,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0743237188.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 254 reviews."
        },
        "author_details": {
            "name": "Ann-Marie Macdonald",
            "author_rating": 7.66,
            "author_reviews": 362,
            "biography": "Author with an average rating of 7.66/10 from 362 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0142001805",
            "title": "The Eyre Affair: A Novel",
            "composite_score": 8.96,
            "book_rating": 8.38,
            "book_reviews": 136,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/0142001805.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 136 reviews."
        },
        "author_details": {
            "name": "Jasper Fforde",
            "author_rating": 8.25,
            "author_reviews": 326,
            "biography": "Author with an average rating of 8.25/10 from 326 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0316693006",
            "title": "Four Blind Mice",
            "composite_score": 8.92,
            "book_rating": 8.51,
            "book_reviews": 118,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0316693006.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 118 reviews."
        },
        "author_details": {
            "name": "James Patterson",
            "author_rating": 7.7,
            "author_reviews": 4774,
            "biography": "Author with an average rating of 7.7/10 from 4774 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0380718340",
            "title": "Cruel &amp; Unusual (Kay Scarpetta Mysteries (Paperback))",
            "composite_score": 8.92,
            "book_rating": 8.1,
            "book_reviews": 160,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0380718340.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 160 reviews."
        },
        "author_details": {
            "name": "Patricia D. Cornwell",
            "author_rating": 7.95,
            "author_reviews": 388,
            "biography": "Author with an average rating of 7.95/10 from 388 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0871136791",
            "title": "Cold Mountain",
            "composite_score": 8.9,
            "book_rating": 8.1,
            "book_reviews": 156,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0871136791.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 156 reviews."
        },
        "author_details": {
            "name": "Charles Frazier",
            "author_rating": 7.93,
            "author_reviews": 476,
            "biography": "Author with an average rating of 7.93/10 from 476 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0684801523",
            "title": "The Great Gatsby",
            "composite_score": 8.9,
            "book_rating": 7.69,
            "book_reviews": 212,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0684801523.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 212 reviews."
        },
        "author_details": {
            "name": "F. Scott Fitzgerald",
            "author_rating": 7.73,
            "author_reviews": 510,
            "biography": "Author with an average rating of 7.73/10 from 510 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0380731851",
            "title": "Mystic River",
            "composite_score": 8.89,
            "book_rating": 7.7,
            "book_reviews": 208,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0380731851.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 208 reviews."
        },
        "author_details": {
            "name": "Dennis Lehane",
            "author_rating": 7.93,
            "author_reviews": 502,
            "biography": "Author with an average rating of 7.93/10 from 502 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0425147622",
            "title": "The Body Farm",
            "composite_score": 8.88,
            "book_rating": 8.02,
            "book_reviews": 162,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0425147622.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 162 reviews."
        },
        "author_details": {
            "name": "Patricia Daniels Cornwell",
            "author_rating": 7.48,
            "author_reviews": 1886,
            "biography": "Author with an average rating of 7.48/10 from 1886 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0385510438",
            "title": "The Last Juror",
            "composite_score": 8.88,
            "book_rating": 8.35,
            "book_reviews": 126,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0385510438.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 126 reviews."
        },
        "author_details": {
            "name": "John Grisham",
            "author_rating": 7.56,
            "author_reviews": 7340,
            "biography": "Author with an average rating of 7.56/10 from 7340 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "1558745157",
            "title": "The Lost Boy: A Foster Child's Search for the Love of a Family",
            "composite_score": 8.87,
            "book_rating": 8.2,
            "book_reviews": 140,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/1558745157.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 140 reviews."
        },
        "author_details": {
            "name": "Dave Pelzer",
            "author_rating": 8.06,
            "author_reviews": 464,
            "biography": "Author with an average rating of 8.06/10 from 464 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "1592400876",
            "title": "Eats, Shoots &amp; Leaves: The Zero Tolerance Approach to Punctuation",
            "composite_score": 8.87,
            "book_rating": 8.5,
            "book_reviews": 112,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/1592400876.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 112 reviews."
        },
        "author_details": {
            "name": "Lynne Truss",
            "author_rating": 8.44,
            "author_reviews": 150,
            "biography": "Author with an average rating of 8.44/10 from 150 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0375707972",
            "title": "The Reader",
            "composite_score": 8.86,
            "book_rating": 7.21,
            "book_reviews": 290,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/0375707972.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 290 reviews."
        },
        "author_details": {
            "name": "Bernhard Schlink",
            "author_rating": 7.28,
            "author_reviews": 538,
            "biography": "Author with an average rating of 7.28/10 from 538 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0451163966",
            "title": "One Flew Over the Cuckoo's Nest",
            "composite_score": 8.85,
            "book_rating": 8.5,
            "book_reviews": 108,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0451163966.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 108 reviews."
        },
        "author_details": {
            "name": "Ken Kesey",
            "author_rating": 8.25,
            "author_reviews": 204,
            "biography": "Author with an average rating of 8.25/10 from 204 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "1400032717",
            "title": "The Curious Incident of the Dog in the Night-Time (Vintage Contemporaries)",
            "composite_score": 8.85,
            "book_rating": 8.59,
            "book_reviews": 102,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/1400032717.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 102 reviews."
        },
        "author_details": {
            "name": "Mark Haddon",
            "author_rating": 8.29,
            "author_reviews": 298,
            "biography": "Author with an average rating of 8.29/10 from 298 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0345413350",
            "title": "The Golden Compass (His Dark Materials, Book 1)",
            "composite_score": 8.84,
            "book_rating": 7.96,
            "book_reviews": 160,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/0345413350.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 160 reviews."
        },
        "author_details": {
            "name": "Philip Pullman",
            "author_rating": 8.39,
            "author_reviews": 982,
            "biography": "Author with an average rating of 8.39/10 from 982 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553273914",
            "title": "The House of the Spirits",
            "composite_score": 8.84,
            "book_rating": 8.25,
            "book_reviews": 130,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0553273914.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 130 reviews."
        },
        "author_details": {
            "name": "Isabel Allende",
            "author_rating": 7.71,
            "author_reviews": 1052,
            "biography": "Author with an average rating of 7.71/10 from 1052 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0375725784",
            "title": "A Heartbreaking Work of Staggering Genius",
            "composite_score": 8.84,
            "book_rating": 7.18,
            "book_reviews": 288,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/0375725784.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 288 reviews."
        },
        "author_details": {
            "name": "Dave Eggers",
            "author_rating": 7.27,
            "author_reviews": 430,
            "biography": "Author with an average rating of 7.27/10 from 430 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0380018179",
            "title": "The Thorn Birds",
            "composite_score": 8.83,
            "book_rating": 8.07,
            "book_reviews": 146,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0380018179.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 146 reviews."
        },
        "author_details": {
            "name": "Colleen Mccullough",
            "author_rating": 7.62,
            "author_reviews": 384,
            "biography": "Author with an average rating of 7.62/10 from 384 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0316777730",
            "title": "Naked",
            "composite_score": 8.83,
            "book_rating": 8.18,
            "book_reviews": 134,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0316777730.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 134 reviews."
        },
        "author_details": {
            "name": "David Sedaris",
            "author_rating": 7.85,
            "author_reviews": 928,
            "biography": "Author with an average rating of 7.85/10 from 928 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0446520802",
            "title": "The Notebook",
            "composite_score": 8.82,
            "book_rating": 8.41,
            "book_reviews": 112,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0446520802.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 112 reviews."
        },
        "author_details": {
            "name": "Nicholas Sparks",
            "author_rating": 7.74,
            "author_reviews": 2262,
            "biography": "Author with an average rating of 7.74/10 from 2262 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553208845",
            "title": "Siddhartha",
            "composite_score": 8.82,
            "book_rating": 8.5,
            "book_reviews": 104,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0553208845.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 104 reviews."
        },
        "author_details": {
            "name": "Hermann Hesse",
            "author_rating": 8.23,
            "author_reviews": 556,
            "biography": "Author with an average rating of 8.23/10 from 556 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0060977493",
            "title": "The God of Small Things",
            "composite_score": 8.82,
            "book_rating": 7.68,
            "book_reviews": 194,
            "distinct_countries": 21,
            "cover_image": "http://images.amazon.com/images/P/0060977493.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 21 countries and 194 reviews."
        },
        "author_details": {
            "name": "Arundhati Roy",
            "author_rating": 7.64,
            "author_reviews": 306,
            "biography": "Author with an average rating of 7.64/10 from 306 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0425152251",
            "title": "Sophie's World: A Novel About the History of Philosophy",
            "composite_score": 8.82,
            "book_rating": 7.71,
            "book_reviews": 188,
            "distinct_countries": 14,
            "cover_image": "http://images.amazon.com/images/P/0425152251.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 14 countries and 188 reviews."
        },
        "author_details": {
            "name": "Jostein Gaarder",
            "author_rating": 7.83,
            "author_reviews": 432,
            "biography": "Author with an average rating of 7.83/10 from 432 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0385420161",
            "title": "Like Water for Chocolate: A Novel in Monthly Installments, With Recipes, Romances, and Home Remedies",
            "composite_score": 8.81,
            "book_rating": 8.28,
            "book_reviews": 122,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0385420161.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 122 reviews."
        },
        "author_details": {
            "name": "Laura Esquivel",
            "author_rating": 7.79,
            "author_reviews": 482,
            "biography": "Author with an average rating of 7.79/10 from 482 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0515136530",
            "title": "Key of Valor (Roberts, Nora. Key Trilogy, 3.)",
            "composite_score": 8.81,
            "book_rating": 8.51,
            "book_reviews": 102,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0515136530.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 102 reviews."
        },
        "author_details": {
            "name": "Nora Roberts",
            "author_rating": 7.63,
            "author_reviews": 6002,
            "biography": "Author with an average rating of 7.63/10 from 6002 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0452269571",
            "title": "Bastard Out of Carolina",
            "composite_score": 8.81,
            "book_rating": 8.24,
            "book_reviews": 126,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0452269571.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 126 reviews."
        },
        "author_details": {
            "name": "Dorothy Allison",
            "author_rating": 7.96,
            "author_reviews": 266,
            "biography": "Author with an average rating of 7.96/10 from 266 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0142000205",
            "title": "Icy Sparks",
            "composite_score": 8.81,
            "book_rating": 7.28,
            "book_reviews": 258,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0142000205.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 258 reviews."
        },
        "author_details": {
            "name": "Gwyn Hyman Rubio",
            "author_rating": 7.27,
            "author_reviews": 262,
            "biography": "Author with an average rating of 7.27/10 from 262 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0380977788",
            "title": "Coraline",
            "composite_score": 8.8,
            "book_rating": 8.22,
            "book_reviews": 126,
            "distinct_countries": 13,
            "cover_image": "http://images.amazon.com/images/P/0380977788.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 13 countries and 126 reviews."
        },
        "author_details": {
            "name": "Neil Gaiman",
            "author_rating": 8.29,
            "author_reviews": 1638,
            "biography": "Author with an average rating of 8.29/10 from 1638 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0312422156",
            "title": "Middlesex: A Novel",
            "composite_score": 8.8,
            "book_rating": 8.31,
            "book_reviews": 118,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0312422156.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 118 reviews."
        },
        "author_details": {
            "name": "Jeffrey Eugenides",
            "author_rating": 7.99,
            "author_reviews": 398,
            "biography": "Author with an average rating of 7.99/10 from 398 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "006101351X",
            "title": "The Perfect Storm : A True Story of Men Against the Sea",
            "composite_score": 8.8,
            "book_rating": 7.38,
            "book_reviews": 236,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/006101351X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 236 reviews."
        },
        "author_details": {
            "name": "Sebastian Junger",
            "author_rating": 7.55,
            "author_reviews": 350,
            "biography": "Author with an average rating of 7.55/10 from 350 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0609804138",
            "title": "The Sweet Potato Queens' Book of Love",
            "composite_score": 8.79,
            "book_rating": 7.63,
            "book_reviews": 194,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0609804138.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 194 reviews."
        },
        "author_details": {
            "name": "Jill Conner Browne",
            "author_rating": 7.54,
            "author_reviews": 272,
            "biography": "Author with an average rating of 7.54/10 from 272 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0385730586",
            "title": "Sisterhood of the Traveling Pants",
            "composite_score": 8.79,
            "book_rating": 8.25,
            "book_reviews": 122,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0385730586.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 122 reviews."
        },
        "author_details": {
            "name": "Ann Brashares",
            "author_rating": 8.23,
            "author_reviews": 270,
            "biography": "Author with an average rating of 8.23/10 from 270 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0385265700",
            "title": "The Book of Ruth (Oprah's Book Club (Paperback))",
            "composite_score": 8.79,
            "book_rating": 7.4,
            "book_reviews": 230,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/0385265700.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 230 reviews."
        },
        "author_details": {
            "name": "Jane Hamilton",
            "author_rating": 7.12,
            "author_reviews": 600,
            "biography": "Author with an average rating of 7.12/10 from 600 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0805062971",
            "title": "Fight Club",
            "composite_score": 8.78,
            "book_rating": 8.5,
            "book_reviews": 100,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0805062971.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 100 reviews."
        },
        "author_details": {
            "name": "Chuck Palahniuk",
            "author_rating": 8.07,
            "author_reviews": 544,
            "biography": "Author with an average rating of 8.07/10 from 544 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0679746048",
            "title": "Girl, Interrupted",
            "composite_score": 8.78,
            "book_rating": 7.34,
            "book_reviews": 236,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0679746048.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 236 reviews."
        },
        "author_details": {
            "name": "Susanna Kaysen",
            "author_rating": 7.35,
            "author_reviews": 266,
            "biography": "Author with an average rating of 7.35/10 from 266 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0440223202",
            "title": "Evening Class",
            "composite_score": 8.78,
            "book_rating": 8.39,
            "book_reviews": 108,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0440223202.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 108 reviews."
        },
        "author_details": {
            "name": "Maeve Binchy",
            "author_rating": 7.65,
            "author_reviews": 1774,
            "biography": "Author with an average rating of 7.65/10 from 1774 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "014029628X",
            "title": "Girl in Hyacinth Blue",
            "composite_score": 8.78,
            "book_rating": 7.86,
            "book_reviews": 160,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/014029628X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 160 reviews."
        },
        "author_details": {
            "name": "Susan Vreeland",
            "author_rating": 7.87,
            "author_reviews": 294,
            "biography": "Author with an average rating of 7.87/10 from 294 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553279378",
            "title": "I Know Why the Caged Bird Sings",
            "composite_score": 8.77,
            "book_rating": 8.07,
            "book_reviews": 136,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0553279378.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 136 reviews."
        },
        "author_details": {
            "name": "Maya Angelou",
            "author_rating": 8.09,
            "author_reviews": 478,
            "biography": "Author with an average rating of 8.09/10 from 478 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0842329242",
            "title": "Nicolae: The Rise of Antichrist (Left Behind No. 3)",
            "composite_score": 8.77,
            "book_rating": 8.25,
            "book_reviews": 118,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0842329242.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 118 reviews."
        },
        "author_details": {
            "name": "Tim F. Lahaye",
            "author_rating": 8.13,
            "author_reviews": 198,
            "biography": "Author with an average rating of 8.13/10 from 198 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0671042262",
            "title": "The Blue Nowhere : A Novel",
            "composite_score": 8.76,
            "book_rating": 8.18,
            "book_reviews": 124,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0671042262.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 124 reviews."
        },
        "author_details": {
            "name": "Jeffery Deaver",
            "author_rating": 7.72,
            "author_reviews": 802,
            "biography": "Author with an average rating of 7.72/10 from 802 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0064407667",
            "title": "The Bad Beginning (A Series of Unfortunate Events, Book 1)",
            "composite_score": 8.76,
            "book_rating": 7.37,
            "book_reviews": 226,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0064407667.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 226 reviews."
        },
        "author_details": {
            "name": "Lemony Snicket",
            "author_rating": 7.98,
            "author_reviews": 738,
            "biography": "Author with an average rating of 7.98/10 from 738 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0767905180",
            "title": "Jemima J: A Novel About Ugly Ducklings and Swans",
            "composite_score": 8.75,
            "book_rating": 7.53,
            "book_reviews": 198,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0767905180.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 198 reviews."
        },
        "author_details": {
            "name": "Jane Green",
            "author_rating": 7.57,
            "author_reviews": 562,
            "biography": "Author with an average rating of 7.57/10 from 562 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553268880",
            "title": "The Prince of Tides",
            "composite_score": 8.75,
            "book_rating": 7.88,
            "book_reviews": 152,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0553268880.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 152 reviews."
        },
        "author_details": {
            "name": "Pat Conroy",
            "author_rating": 7.83,
            "author_reviews": 496,
            "biography": "Author with an average rating of 7.83/10 from 496 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "014025448X",
            "title": "At Home in Mitford (The Mitford Years)",
            "composite_score": 8.75,
            "book_rating": 7.77,
            "book_reviews": 166,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/014025448X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 166 reviews."
        },
        "author_details": {
            "name": "Jan Karon",
            "author_rating": 7.96,
            "author_reviews": 584,
            "biography": "Author with an average rating of 7.96/10 from 584 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0385479565",
            "title": "The Hot Zone",
            "composite_score": 8.75,
            "book_rating": 7.96,
            "book_reviews": 144,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0385479565.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 144 reviews."
        },
        "author_details": {
            "name": "Richard Preston",
            "author_rating": 8.06,
            "author_reviews": 314,
            "biography": "Author with an average rating of 8.06/10 from 314 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0786881852",
            "title": "Don't Sweat the Small Stuff and It's All Small Stuff : Simple Ways to Keep the Little Things from Taking Over Your Life (Don't Sweat the Small Stuff Series)",
            "composite_score": 8.74,
            "book_rating": 7.51,
            "book_reviews": 200,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0786881852.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 200 reviews."
        },
        "author_details": {
            "name": "Richard Carlson",
            "author_rating": 7.32,
            "author_reviews": 338,
            "biography": "Author with an average rating of 7.32/10 from 338 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0452282829",
            "title": "We Were the Mulvaneys",
            "composite_score": 8.74,
            "book_rating": 7.06,
            "book_reviews": 278,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/0452282829.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 278 reviews."
        },
        "author_details": {
            "name": "Joyce Carol Oates",
            "author_rating": 7.0,
            "author_reviews": 542,
            "biography": "Author with an average rating of 7.0/10 from 542 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553280368",
            "title": "C Is for Corpse (Kinsey Millhone Mysteries (Paperback))",
            "composite_score": 8.73,
            "book_rating": 8.3,
            "book_reviews": 108,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0553280368.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 108 reviews."
        },
        "author_details": {
            "name": "Sue Grafton",
            "author_rating": 7.7,
            "author_reviews": 2808,
            "biography": "Author with an average rating of 7.7/10 from 2808 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "1573225517",
            "title": "High Fidelity",
            "composite_score": 8.73,
            "book_rating": 8.35,
            "book_reviews": 104,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/1573225517.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 104 reviews."
        },
        "author_details": {
            "name": "Nick Hornby",
            "author_rating": 7.54,
            "author_reviews": 1194,
            "biography": "Author with an average rating of 7.54/10 from 1194 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0375702709",
            "title": "A Lesson Before Dying (Vintage Contemporaries (Paperback))",
            "composite_score": 8.72,
            "book_rating": 7.72,
            "book_reviews": 166,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0375702709.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 166 reviews."
        },
        "author_details": {
            "name": "Ernest J. Gaines",
            "author_rating": 7.78,
            "author_reviews": 230,
            "biography": "Author with an average rating of 7.78/10 from 230 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "002542730X",
            "title": "Politically Correct Bedtime Stories: Modern Tales for Our Life and Times",
            "composite_score": 8.72,
            "book_rating": 7.81,
            "book_reviews": 154,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/002542730X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 154 reviews."
        },
        "author_details": {
            "name": "James Finn Garner",
            "author_rating": 7.82,
            "author_reviews": 286,
            "biography": "Author with an average rating of 7.82/10 from 286 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0679731148",
            "title": "A Year in Provence",
            "composite_score": 8.72,
            "book_rating": 8.0,
            "book_reviews": 134,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0679731148.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 134 reviews."
        },
        "author_details": {
            "name": "Peter Mayle",
            "author_rating": 7.65,
            "author_reviews": 466,
            "biography": "Author with an average rating of 7.65/10 from 466 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0452264464",
            "title": "Beloved (Plume Contemporary Fiction)",
            "composite_score": 8.71,
            "book_rating": 7.77,
            "book_reviews": 158,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0452264464.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 158 reviews."
        },
        "author_details": {
            "name": "Toni Morrison",
            "author_rating": 7.45,
            "author_reviews": 856,
            "biography": "Author with an average rating of 7.45/10 from 856 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0345443284",
            "title": "While I Was Gone",
            "composite_score": 8.71,
            "book_rating": 7.02,
            "book_reviews": 276,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0345443284.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 276 reviews."
        },
        "author_details": {
            "name": "Sue Miller",
            "author_rating": 7.02,
            "author_reviews": 536,
            "biography": "Author with an average rating of 7.02/10 from 536 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "038079487X",
            "title": "What Looks Like Crazy On An Ordinary Day",
            "composite_score": 8.71,
            "book_rating": 7.48,
            "book_reviews": 196,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/038079487X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 196 reviews."
        },
        "author_details": {
            "name": "Pearl Cleage",
            "author_rating": 7.59,
            "author_reviews": 234,
            "biography": "Author with an average rating of 7.59/10 from 234 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0140119906",
            "title": "Love in the Time of Cholera (Penguin Great Books of the 20th Century)",
            "composite_score": 8.7,
            "book_rating": 8.12,
            "book_reviews": 120,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0140119906.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 120 reviews."
        },
        "author_details": {
            "name": "Gabriel Garcia Marquez",
            "author_rating": 8.02,
            "author_reviews": 826,
            "biography": "Author with an average rating of 8.02/10 from 826 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0345439104",
            "title": "Drowning Ruth (Oprah's Book Club)",
            "composite_score": 8.7,
            "book_rating": 7.51,
            "book_reviews": 190,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0345439104.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 190 reviews."
        },
        "author_details": {
            "name": "Christina Schwarz",
            "author_rating": 7.48,
            "author_reviews": 338,
            "biography": "Author with an average rating of 7.48/10 from 338 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0679723161",
            "title": "Lolita (Vintage International)",
            "composite_score": 8.7,
            "book_rating": 8.36,
            "book_reviews": 100,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0679723161.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 100 reviews."
        },
        "author_details": {
            "name": "Vladimir Nabokov",
            "author_rating": 8.17,
            "author_reviews": 178,
            "biography": "Author with an average rating of 8.17/10 from 178 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0451191145",
            "title": "Atlas Shrugged",
            "composite_score": 8.69,
            "book_rating": 8.14,
            "book_reviews": 116,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0451191145.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 116 reviews."
        },
        "author_details": {
            "name": "Ayn Rand",
            "author_rating": 8.37,
            "author_reviews": 468,
            "biography": "Author with an average rating of 8.37/10 from 468 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0894805770",
            "title": "What to Expect the First Year",
            "composite_score": 8.69,
            "book_rating": 8.31,
            "book_reviews": 102,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0894805770.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 102 reviews."
        },
        "author_details": {
            "name": "Arlene Eisenberg",
            "author_rating": 8.18,
            "author_reviews": 288,
            "biography": "Author with an average rating of 8.18/10 from 288 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0684833395",
            "title": "Catch 22",
            "composite_score": 8.67,
            "book_rating": 8.23,
            "book_reviews": 106,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0684833395.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 106 reviews."
        },
        "author_details": {
            "name": "Joseph Heller",
            "author_rating": 7.65,
            "author_reviews": 224,
            "biography": "Author with an average rating of 7.65/10 from 224 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0345438329",
            "title": "Big Stone Gap: A Novel (Ballantine Reader's Circle)",
            "composite_score": 8.67,
            "book_rating": 7.5,
            "book_reviews": 184,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0345438329.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 184 reviews."
        },
        "author_details": {
            "name": "Adriana Trigiani",
            "author_rating": 7.62,
            "author_reviews": 428,
            "biography": "Author with an average rating of 7.62/10 from 428 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0140177396",
            "title": "Of Mice and Men (Penguin Great Books of the 20th Century)",
            "composite_score": 8.67,
            "book_rating": 8.29,
            "book_reviews": 102,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0140177396.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 102 reviews."
        },
        "author_details": {
            "name": "John Steinbeck",
            "author_rating": 7.98,
            "author_reviews": 1158,
            "biography": "Author with an average rating of 7.98/10 from 1158 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0671793489",
            "title": "All Around the Town",
            "composite_score": 8.67,
            "book_rating": 8.14,
            "book_reviews": 114,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0671793489.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 114 reviews."
        },
        "author_details": {
            "name": "Mary Higgins Clark",
            "author_rating": 7.51,
            "author_reviews": 3426,
            "biography": "Author with an average rating of 7.51/10 from 3426 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0060929871",
            "title": "Brave New World",
            "composite_score": 8.66,
            "book_rating": 7.86,
            "book_reviews": 138,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/0060929871.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 138 reviews."
        },
        "author_details": {
            "name": "Aldous Huxley",
            "author_rating": 8.0,
            "author_reviews": 382,
            "biography": "Author with an average rating of 8.0/10 from 382 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0380012863",
            "title": "Jonathan Livingston Seagull",
            "composite_score": 8.65,
            "book_rating": 8.11,
            "book_reviews": 114,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0380012863.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 114 reviews."
        },
        "author_details": {
            "name": "Richard Bach",
            "author_rating": 8.07,
            "author_reviews": 584,
            "biography": "Author with an average rating of 8.07/10 from 584 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0385498802",
            "title": "Bee Season: A Novel",
            "composite_score": 8.65,
            "book_rating": 7.5,
            "book_reviews": 180,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0385498802.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 180 reviews."
        },
        "author_details": {
            "name": "Myla Goldberg",
            "author_rating": 7.46,
            "author_reviews": 218,
            "biography": "Author with an average rating of 7.46/10 from 218 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0345384369",
            "title": "Intensity",
            "composite_score": 8.62,
            "book_rating": 8.22,
            "book_reviews": 100,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0345384369.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 100 reviews."
        },
        "author_details": {
            "name": "Dean Koontz",
            "author_rating": 7.85,
            "author_reviews": 1312,
            "biography": "Author with an average rating of 7.85/10 from 1312 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0671004107",
            "title": "Contact",
            "composite_score": 8.61,
            "book_rating": 7.82,
            "book_reviews": 134,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/0671004107.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 134 reviews."
        },
        "author_details": {
            "name": "Carl Sagan",
            "author_rating": 7.86,
            "author_reviews": 352,
            "biography": "Author with an average rating of 7.86/10 from 352 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0446604666",
            "title": "Sick Puppy",
            "composite_score": 8.61,
            "book_rating": 7.7,
            "book_reviews": 146,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0446604666.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 146 reviews."
        },
        "author_details": {
            "name": "Carl Hiaasen",
            "author_rating": 7.78,
            "author_reviews": 876,
            "biography": "Author with an average rating of 7.78/10 from 876 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0679745203",
            "title": "The English Patient",
            "composite_score": 8.61,
            "book_rating": 7.43,
            "book_reviews": 180,
            "distinct_countries": 14,
            "cover_image": "http://images.amazon.com/images/P/0679745203.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 14 countries and 180 reviews."
        },
        "author_details": {
            "name": "Michael Ondaatje",
            "author_rating": 7.34,
            "author_reviews": 382,
            "biography": "Author with an average rating of 7.34/10 from 382 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0441569595",
            "title": "Neuromancer (Remembering Tomorrow)",
            "composite_score": 8.6,
            "book_rating": 7.61,
            "book_reviews": 154,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/0441569595.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 154 reviews."
        },
        "author_details": {
            "name": "William Gibson",
            "author_rating": 7.58,
            "author_reviews": 518,
            "biography": "Author with an average rating of 7.58/10 from 518 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0812511816",
            "title": "The Eye of the World (The Wheel of Time, Book 1)",
            "composite_score": 8.6,
            "book_rating": 7.89,
            "book_reviews": 126,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0812511816.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 126 reviews."
        },
        "author_details": {
            "name": "Robert Jordan",
            "author_rating": 7.81,
            "author_reviews": 594,
            "biography": "Author with an average rating of 7.81/10 from 594 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553277472",
            "title": "Zen and the Art of Motorcycle Maintenance: An Inquiry into Values",
            "composite_score": 8.6,
            "book_rating": 7.65,
            "book_reviews": 150,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/0553277472.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 150 reviews."
        },
        "author_details": {
            "name": "Robert Pirsig",
            "author_rating": 7.53,
            "author_reviews": 174,
            "biography": "Author with an average rating of 7.53/10 from 174 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0786817070",
            "title": "Artemis Fowl (Artemis Fowl, Book 1)",
            "composite_score": 8.59,
            "book_rating": 7.65,
            "book_reviews": 148,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0786817070.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 148 reviews."
        },
        "author_details": {
            "name": "Eoin Colfer",
            "author_rating": 7.99,
            "author_reviews": 390,
            "biography": "Author with an average rating of 7.99/10 from 390 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0345413903",
            "title": "The Murder Book",
            "composite_score": 8.59,
            "book_rating": 7.75,
            "book_reviews": 138,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0345413903.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 138 reviews."
        },
        "author_details": {
            "name": "Jonathan Kellerman",
            "author_rating": 7.47,
            "author_reviews": 1688,
            "biography": "Author with an average rating of 7.47/10 from 1688 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0061097101",
            "title": "The Saving Graces: A Novel",
            "composite_score": 8.58,
            "book_rating": 7.48,
            "book_reviews": 166,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0061097101.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 166 reviews."
        },
        "author_details": {
            "name": "Patricia Gaffney",
            "author_rating": 7.25,
            "author_reviews": 314,
            "biography": "Author with an average rating of 7.25/10 from 314 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0689817851",
            "title": "Go Ask Alice",
            "composite_score": 8.58,
            "book_rating": 8.14,
            "book_reviews": 102,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0689817851.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 102 reviews."
        },
        "author_details": {
            "name": "Anonymous",
            "author_rating": 7.33,
            "author_reviews": 312,
            "biography": "Author with an average rating of 7.33/10 from 312 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "1558744150",
            "title": "Chicken Soup for the Woman's Soul (Chicken Soup for the Soul Series (Paper))",
            "composite_score": 8.58,
            "book_rating": 7.79,
            "book_reviews": 132,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/1558744150.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 132 reviews."
        },
        "author_details": {
            "name": "Jack Canfield",
            "author_rating": 7.8,
            "author_reviews": 1618,
            "biography": "Author with an average rating of 7.8/10 from 1618 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0316182540",
            "title": "White Oleander : A Novel",
            "composite_score": 8.56,
            "book_rating": 8.08,
            "book_reviews": 104,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0316182540.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 104 reviews."
        },
        "author_details": {
            "name": "Janet Fitch",
            "author_rating": 7.76,
            "author_reviews": 706,
            "biography": "Author with an average rating of 7.76/10 from 706 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0671038184",
            "title": "Jewel",
            "composite_score": 8.56,
            "book_rating": 7.46,
            "book_reviews": 164,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0671038184.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 164 reviews."
        },
        "author_details": {
            "name": "Bret Lott",
            "author_rating": 7.44,
            "author_reviews": 280,
            "biography": "Author with an average rating of 7.44/10 from 280 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0064472272",
            "title": "Angus, Thongs and Full-Frontal Snogging: Confessions of Georgia Nicolson",
            "composite_score": 8.56,
            "book_rating": 7.95,
            "book_reviews": 114,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0064472272.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 114 reviews."
        },
        "author_details": {
            "name": "Louise Rennison",
            "author_rating": 8.01,
            "author_reviews": 208,
            "biography": "Author with an average rating of 8.01/10 from 208 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "055356451X",
            "title": "Night Sins",
            "composite_score": 8.55,
            "book_rating": 7.96,
            "book_reviews": 112,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/055356451X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 112 reviews."
        },
        "author_details": {
            "name": "Tami Hoag",
            "author_rating": 7.48,
            "author_reviews": 940,
            "biography": "Author with an average rating of 7.48/10 from 940 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0552998486",
            "title": "Chocolat",
            "composite_score": 8.55,
            "book_rating": 8.04,
            "book_reviews": 106,
            "distinct_countries": 12,
            "cover_image": "http://images.amazon.com/images/P/0552998486.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 12 countries and 106 reviews."
        },
        "author_details": {
            "name": "Joanne Harris",
            "author_rating": 7.7,
            "author_reviews": 714,
            "biography": "Author with an average rating of 7.7/10 from 714 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553580221",
            "title": "False Memory",
            "composite_score": 8.54,
            "book_rating": 7.75,
            "book_reviews": 130,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0553580221.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 130 reviews."
        },
        "author_details": {
            "name": "Dean R. Koontz",
            "author_rating": 7.57,
            "author_reviews": 2950,
            "biography": "Author with an average rating of 7.57/10 from 2950 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553260111",
            "title": "The Bourne Identity",
            "composite_score": 8.54,
            "book_rating": 7.57,
            "book_reviews": 148,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/0553260111.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 148 reviews."
        },
        "author_details": {
            "name": "Robert Ludlum",
            "author_rating": 7.34,
            "author_reviews": 1174,
            "biography": "Author with an average rating of 7.34/10 from 1174 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0316789089",
            "title": "The Pilot's Wife : A Novel Tag: Author of the Weight of Water (Oprah's Book Club (Hardcover))",
            "composite_score": 8.54,
            "book_rating": 7.75,
            "book_reviews": 130,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0316789089.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 130 reviews."
        },
        "author_details": {
            "name": "Anita Shreve",
            "author_rating": 7.54,
            "author_reviews": 2054,
            "biography": "Author with an average rating of 7.54/10 from 2054 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "031242227X",
            "title": "Running with Scissors: A Memoir",
            "composite_score": 8.53,
            "book_rating": 7.51,
            "book_reviews": 152,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/031242227X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 152 reviews."
        },
        "author_details": {
            "name": "Augusten Burroughs",
            "author_rating": 7.53,
            "author_reviews": 310,
            "biography": "Author with an average rating of 7.53/10 from 310 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0679444815",
            "title": "Timeline",
            "composite_score": 8.53,
            "book_rating": 7.86,
            "book_reviews": 118,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0679444815.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 118 reviews."
        },
        "author_details": {
            "name": "Michael Crichton",
            "author_rating": 7.53,
            "author_reviews": 3410,
            "biography": "Author with an average rating of 7.53/10 from 3410 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0446610100",
            "title": "Wish You Well",
            "composite_score": 8.51,
            "book_rating": 8.02,
            "book_reviews": 102,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0446610100.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 102 reviews."
        },
        "author_details": {
            "name": "David Baldacci",
            "author_rating": 7.42,
            "author_reviews": 1076,
            "biography": "Author with an average rating of 7.42/10 from 1076 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0425143325",
            "title": "Without Remorse",
            "composite_score": 8.51,
            "book_rating": 7.83,
            "book_reviews": 118,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0425143325.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 118 reviews."
        },
        "author_details": {
            "name": "Tom Clancy",
            "author_rating": 7.33,
            "author_reviews": 2450,
            "biography": "Author with an average rating of 7.33/10 from 2450 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0671028375",
            "title": "Fatal Voyage",
            "composite_score": 8.48,
            "book_rating": 7.96,
            "book_reviews": 102,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0671028375.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 102 reviews."
        },
        "author_details": {
            "name": "Kathy Reichs",
            "author_rating": 7.74,
            "author_reviews": 696,
            "biography": "Author with an average rating of 7.74/10 from 696 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0425182878",
            "title": "Chosen Prey",
            "composite_score": 8.47,
            "book_rating": 7.76,
            "book_reviews": 118,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0425182878.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 118 reviews."
        },
        "author_details": {
            "name": "John Sandford",
            "author_rating": 7.68,
            "author_reviews": 1426,
            "biography": "Author with an average rating of 7.68/10 from 1426 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "1559029838",
            "title": "Call of the Wild",
            "composite_score": 8.46,
            "book_rating": 7.85,
            "book_reviews": 108,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/1559029838.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 108 reviews."
        },
        "author_details": {
            "name": "Jack London",
            "author_rating": 7.65,
            "author_reviews": 380,
            "biography": "Author with an average rating of 7.65/10 from 380 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0399144463",
            "title": "Who Moved My Cheese? An Amazing Way to Deal with Change in Your Work and in Your Life",
            "composite_score": 8.45,
            "book_rating": 7.16,
            "book_reviews": 180,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0399144463.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 180 reviews."
        },
        "author_details": {
            "name": "Spencer Johnson",
            "author_rating": 7.11,
            "author_reviews": 232,
            "biography": "Author with an average rating of 7.11/10 from 232 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0375502238",
            "title": "Blessings",
            "composite_score": 8.45,
            "book_rating": 7.8,
            "book_reviews": 112,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0375502238.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 112 reviews."
        },
        "author_details": {
            "name": "Anna Quindlen",
            "author_rating": 7.62,
            "author_reviews": 826,
            "biography": "Author with an average rating of 7.62/10 from 826 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0385503954",
            "title": "Atonement: A Novel",
            "composite_score": 8.45,
            "book_rating": 7.94,
            "book_reviews": 100,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0385503954.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 100 reviews."
        },
        "author_details": {
            "name": "Ian Mcewan",
            "author_rating": 7.48,
            "author_reviews": 476,
            "biography": "Author with an average rating of 7.48/10 from 476 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0671014196",
            "title": "The Summerhouse",
            "composite_score": 8.44,
            "book_rating": 7.58,
            "book_reviews": 130,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0671014196.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 130 reviews."
        },
        "author_details": {
            "name": "Jude Deveraux",
            "author_rating": 7.74,
            "author_reviews": 1316,
            "biography": "Author with an average rating of 7.74/10 from 1316 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0425162443",
            "title": "The Rapture of Canaan",
            "composite_score": 8.4,
            "book_rating": 7.36,
            "book_reviews": 146,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0425162443.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 146 reviews."
        },
        "author_details": {
            "name": "Sheri Reynolds",
            "author_rating": 7.58,
            "author_reviews": 244,
            "biography": "Author with an average rating of 7.58/10 from 244 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0804111359",
            "title": "Secret History",
            "composite_score": 8.39,
            "book_rating": 7.46,
            "book_reviews": 134,
            "distinct_countries": 14,
            "cover_image": "http://images.amazon.com/images/P/0804111359.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 14 countries and 134 reviews."
        },
        "author_details": {
            "name": "Donna Tartt",
            "author_rating": 7.55,
            "author_reviews": 386,
            "biography": "Author with an average rating of 7.55/10 from 386 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0446670111",
            "title": "Einstein's Dreams",
            "composite_score": 8.39,
            "book_rating": 7.79,
            "book_reviews": 104,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0446670111.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 104 reviews."
        },
        "author_details": {
            "name": "Alan Lightman",
            "author_rating": 7.49,
            "author_reviews": 164,
            "biography": "Author with an average rating of 7.49/10 from 164 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0375703055",
            "title": "Ellen Foster",
            "composite_score": 8.39,
            "book_rating": 7.34,
            "book_reviews": 146,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0375703055.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 146 reviews."
        },
        "author_details": {
            "name": "Kaye Gibbons",
            "author_rating": 7.32,
            "author_reviews": 482,
            "biography": "Author with an average rating of 7.32/10 from 482 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0743412028",
            "title": "Pay It Forward",
            "composite_score": 8.38,
            "book_rating": 7.61,
            "book_reviews": 118,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0743412028.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 118 reviews."
        },
        "author_details": {
            "name": "Catherine Ryan Hyde",
            "author_rating": 7.66,
            "author_reviews": 220,
            "biography": "Author with an average rating of 7.66/10 from 220 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0446611808",
            "title": "Envy",
            "composite_score": 8.38,
            "book_rating": 7.82,
            "book_reviews": 100,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0446611808.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 100 reviews."
        },
        "author_details": {
            "name": "Sandra Brown",
            "author_rating": 7.37,
            "author_reviews": 1830,
            "biography": "Author with an average rating of 7.37/10 from 1830 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "006099486X",
            "title": "The Professor and the Madman: A Tale of Murder, Insanity, and the Making of The Oxford English Dictionary",
            "composite_score": 8.37,
            "book_rating": 7.7,
            "book_reviews": 108,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/006099486X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 108 reviews."
        },
        "author_details": {
            "name": "Simon Winchester",
            "author_rating": 7.76,
            "author_reviews": 276,
            "biography": "Author with an average rating of 7.76/10 from 276 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0312980159",
            "title": "Fast Women",
            "composite_score": 8.37,
            "book_rating": 7.75,
            "book_reviews": 104,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0312980159.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 104 reviews."
        },
        "author_details": {
            "name": "Jennifer Crusie",
            "author_rating": 7.73,
            "author_reviews": 664,
            "biography": "Author with an average rating of 7.73/10 from 664 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0767900383",
            "title": "Under the Tuscan Sun",
            "composite_score": 8.35,
            "book_rating": 7.26,
            "book_reviews": 148,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0767900383.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 148 reviews."
        },
        "author_details": {
            "name": "Frances Mayes",
            "author_rating": 7.18,
            "author_reviews": 260,
            "biography": "Author with an average rating of 7.18/10 from 260 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0375703861",
            "title": "White Teeth: A Novel",
            "composite_score": 8.33,
            "book_rating": 7.44,
            "book_reviews": 126,
            "distinct_countries": 10,
            "cover_image": "http://images.amazon.com/images/P/0375703861.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 10 countries and 126 reviews."
        },
        "author_details": {
            "name": "Zadie Smith",
            "author_rating": 7.43,
            "author_reviews": 188,
            "biography": "Author with an average rating of 7.43/10 from 188 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0446359866",
            "title": "Presumed Innocent",
            "composite_score": 8.32,
            "book_rating": 7.53,
            "book_reviews": 116,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0446359866.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 116 reviews."
        },
        "author_details": {
            "name": "Scott Turow",
            "author_rating": 7.13,
            "author_reviews": 574,
            "biography": "Author with an average rating of 7.13/10 from 574 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0679734775",
            "title": "The House on Mango Street (Vintage Contemporaries)",
            "composite_score": 8.31,
            "book_rating": 7.42,
            "book_reviews": 124,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0679734775.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 124 reviews."
        },
        "author_details": {
            "name": "Sandra Cisneros",
            "author_rating": 7.54,
            "author_reviews": 194,
            "biography": "Author with an average rating of 7.54/10 from 194 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0688177751",
            "title": "Miss Julia Speaks Her Mind : A Novel",
            "composite_score": 8.31,
            "book_rating": 7.53,
            "book_reviews": 114,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0688177751.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 114 reviews."
        },
        "author_details": {
            "name": "Ann B. Ross",
            "author_rating": 7.75,
            "author_reviews": 220,
            "biography": "Author with an average rating of 7.75/10 from 220 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "044651862X",
            "title": "The Celestine Prophecy (Celestine Prophecy)",
            "composite_score": 8.31,
            "book_rating": 7.22,
            "book_reviews": 144,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/044651862X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 144 reviews."
        },
        "author_details": {
            "name": "James Redfield",
            "author_rating": 6.93,
            "author_reviews": 404,
            "biography": "Author with an average rating of 6.93/10 from 404 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "014023313X",
            "title": "The Stone Diaries",
            "composite_score": 8.3,
            "book_rating": 7.47,
            "book_reviews": 118,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/014023313X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 118 reviews."
        },
        "author_details": {
            "name": "Carol Shields",
            "author_rating": 7.48,
            "author_reviews": 332,
            "biography": "Author with an average rating of 7.48/10 from 332 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0971880107",
            "title": "Wild Animus",
            "composite_score": 8.28,
            "book_rating": 4.39,
            "book_reviews": 1162,
            "distinct_countries": 46,
            "cover_image": "http://images.amazon.com/images/P/0971880107.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 46 countries and 1162 reviews."
        },
        "author_details": {
            "name": "Rich Shapero",
            "author_rating": 4.39,
            "author_reviews": 1162,
            "biography": "Author with an average rating of 4.39/10 from 1162 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0786885688",
            "title": "Shopgirl",
            "composite_score": 8.27,
            "book_rating": 7.19,
            "book_reviews": 140,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0786885688.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 140 reviews."
        },
        "author_details": {
            "name": "Steve Martin",
            "author_rating": 7.16,
            "author_reviews": 346,
            "biography": "Author with an average rating of 7.16/10 from 346 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0375727132",
            "title": "The Dive From Clausen's Pier : A Novel (Vintage Contemporaries (Paperback))",
            "composite_score": 8.26,
            "book_rating": 7.58,
            "book_reviews": 104,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0375727132.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 104 reviews."
        },
        "author_details": {
            "name": "Ann Packer",
            "author_rating": 7.47,
            "author_reviews": 218,
            "biography": "Author with an average rating of 7.47/10 from 218 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0802130208",
            "title": "A Confederacy of Dunces (Evergreen Book)",
            "composite_score": 8.26,
            "book_rating": 7.2,
            "book_reviews": 138,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0802130208.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 138 reviews."
        },
        "author_details": {
            "name": "John Kennedy Toole",
            "author_rating": 7.59,
            "author_reviews": 276,
            "biography": "Author with an average rating of 7.59/10 from 276 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0312421273",
            "title": "The Corrections: A Novel",
            "composite_score": 8.26,
            "book_rating": 7.14,
            "book_reviews": 144,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0312421273.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 144 reviews."
        },
        "author_details": {
            "name": "Jonathan Franzen",
            "author_rating": 6.85,
            "author_reviews": 410,
            "biography": "Author with an average rating of 6.85/10 from 410 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553582127",
            "title": "The Search",
            "composite_score": 8.25,
            "book_rating": 7.56,
            "book_reviews": 104,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0553582127.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 104 reviews."
        },
        "author_details": {
            "name": "Iris Johansen",
            "author_rating": 7.54,
            "author_reviews": 1110,
            "biography": "Author with an average rating of 7.54/10 from 1110 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0345436911",
            "title": "The Dress Lodger (Ballantine Reader's Circle)",
            "composite_score": 8.24,
            "book_rating": 7.47,
            "book_reviews": 110,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0345436911.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 110 reviews."
        },
        "author_details": {
            "name": "Sheri Holman",
            "author_rating": 7.47,
            "author_reviews": 156,
            "biography": "Author with an average rating of 7.47/10 from 156 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0399150897",
            "title": "Blow Fly: A Scarpetta Novel",
            "composite_score": 8.2,
            "book_rating": 7.33,
            "book_reviews": 116,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0399150897.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 116 reviews."
        },
        "author_details": {
            "name": "Patricia Cornwell",
            "author_rating": 7.05,
            "author_reviews": 1072,
            "biography": "Author with an average rating of 7.05/10 from 1072 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0345435168",
            "title": "Open House (Oprah's Book Club (Paperback))",
            "composite_score": 8.2,
            "book_rating": 7.22,
            "book_reviews": 126,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0345435168.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 126 reviews."
        },
        "author_details": {
            "name": "Elizabeth Berg",
            "author_rating": 7.66,
            "author_reviews": 950,
            "biography": "Author with an average rating of 7.66/10 from 950 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0345446860",
            "title": "Back When We Were Grownups : A Novel (Ballantine Reader's Circle)",
            "composite_score": 8.2,
            "book_rating": 7.12,
            "book_reviews": 136,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0345446860.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 136 reviews."
        },
        "author_details": {
            "name": "Anne Tyler",
            "author_rating": 7.37,
            "author_reviews": 1176,
            "biography": "Author with an average rating of 7.37/10 from 1176 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0441304834",
            "title": "Guilty Pleasures (Anita Blake Vampire Hunter (Paperback))",
            "composite_score": 8.19,
            "book_rating": 7.46,
            "book_reviews": 104,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0441304834.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 104 reviews."
        },
        "author_details": {
            "name": "Laurell K. Hamilton",
            "author_rating": 8.04,
            "author_reviews": 1176,
            "biography": "Author with an average rating of 8.04/10 from 1176 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "067088300X",
            "title": "The Girls' Guide to Hunting and Fishing",
            "composite_score": 8.17,
            "book_rating": 6.96,
            "book_reviews": 148,
            "distinct_countries": 11,
            "cover_image": "http://images.amazon.com/images/P/067088300X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 11 countries and 148 reviews."
        },
        "author_details": {
            "name": "Melissa Bank",
            "author_rating": 6.94,
            "author_reviews": 524,
            "biography": "Author with an average rating of 6.94/10 from 524 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0380730138",
            "title": "Vinegar Hill (Oprah's Book Club (Paperback))",
            "composite_score": 8.16,
            "book_rating": 6.69,
            "book_reviews": 178,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0380730138.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 178 reviews."
        },
        "author_details": {
            "name": "A. Manette Ansay",
            "author_rating": 6.6,
            "author_reviews": 284,
            "biography": "Author with an average rating of 6.6/10 from 284 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0385721420",
            "title": "Three Junes",
            "composite_score": 8.14,
            "book_rating": 7.33,
            "book_reviews": 108,
            "distinct_countries": 5,
            "cover_image": "http://images.amazon.com/images/P/0385721420.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 5 countries and 108 reviews."
        },
        "author_details": {
            "name": "Julia Glass",
            "author_rating": 7.35,
            "author_reviews": 160,
            "biography": "Author with an average rating of 7.35/10 from 160 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0671894455",
            "title": "FORREST GUMP (Movie Tie in)",
            "composite_score": 8.14,
            "book_rating": 7.42,
            "book_reviews": 100,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0671894455.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 100 reviews."
        },
        "author_details": {
            "name": "Winston Groom",
            "author_rating": 7.26,
            "author_reviews": 216,
            "biography": "Author with an average rating of 7.26/10 from 216 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0553275976",
            "title": "The Bonfire of the Vanities",
            "composite_score": 8.11,
            "book_rating": 7.23,
            "book_reviews": 112,
            "distinct_countries": 9,
            "cover_image": "http://images.amazon.com/images/P/0553275976.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 9 countries and 112 reviews."
        },
        "author_details": {
            "name": "Tom Wolfe",
            "author_rating": 7.41,
            "author_reviews": 374,
            "biography": "Author with an average rating of 7.41/10 from 374 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0670865796",
            "title": "The Deep End of the Ocean (Oprah's Book Club (Hardcover))",
            "composite_score": 8.09,
            "book_rating": 7.34,
            "book_reviews": 100,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0670865796.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 100 reviews."
        },
        "author_details": {
            "name": "Jacquelyn Mitchard",
            "author_rating": 7.35,
            "author_reviews": 374,
            "biography": "Author with an average rating of 7.35/10 from 374 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0743411250",
            "title": "The Woman Next Door",
            "composite_score": 8.06,
            "book_rating": 7.27,
            "book_reviews": 102,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0743411250.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 102 reviews."
        },
        "author_details": {
            "name": "Barbara Delinsky",
            "author_rating": 7.44,
            "author_reviews": 940,
            "biography": "Author with an average rating of 7.44/10 from 940 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "038550926X",
            "title": "The Devil Wears Prada : A Novel",
            "composite_score": 8.06,
            "book_rating": 7.02,
            "book_reviews": 122,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/038550926X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 122 reviews."
        },
        "author_details": {
            "name": "Lauren Weisberger",
            "author_rating": 7.2,
            "author_reviews": 176,
            "biography": "Author with an average rating of 7.2/10 from 176 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0156628708",
            "title": "Mrs Dalloway",
            "composite_score": 7.97,
            "book_rating": 7.06,
            "book_reviews": 106,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/0156628708.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 106 reviews."
        },
        "author_details": {
            "name": "Virginia Woolf",
            "author_rating": 7.23,
            "author_reviews": 440,
            "biography": "Author with an average rating of 7.23/10 from 440 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "006016848X",
            "title": "Men Are from Mars, Women Are from Venus: A Practical Guide for Improving Communication and Getting What You Want in Your Relationships",
            "composite_score": 7.96,
            "book_rating": 6.95,
            "book_reviews": 114,
            "distinct_countries": 8,
            "cover_image": "http://images.amazon.com/images/P/006016848X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 8 countries and 114 reviews."
        },
        "author_details": {
            "name": "John Gray",
            "author_rating": 6.66,
            "author_reviews": 310,
            "biography": "Author with an average rating of 6.66/10 from 310 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0679735771",
            "title": "American Psycho (Vintage Contemporaries)",
            "composite_score": 7.95,
            "book_rating": 6.98,
            "book_reviews": 110,
            "distinct_countries": 13,
            "cover_image": "http://images.amazon.com/images/P/0679735771.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 13 countries and 110 reviews."
        },
        "author_details": {
            "name": "Bret Easton Ellis",
            "author_rating": 6.89,
            "author_reviews": 300,
            "biography": "Author with an average rating of 6.89/10 from 300 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0671708635",
            "title": "Seven Habits Of Highly Effective People",
            "composite_score": 7.92,
            "book_rating": 7.0,
            "book_reviews": 104,
            "distinct_countries": 7,
            "cover_image": "http://images.amazon.com/images/P/0671708635.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 7 countries and 104 reviews."
        },
        "author_details": {
            "name": "Stephen R. Covey",
            "author_rating": 7.02,
            "author_reviews": 200,
            "biography": "Author with an average rating of 7.02/10 from 200 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0140244824",
            "title": "Songs in Ordinary Time (Oprah's Book Club (Paperback))",
            "composite_score": 7.82,
            "book_rating": 6.53,
            "book_reviews": 132,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0140244824.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 132 reviews."
        },
        "author_details": {
            "name": "Mary Mcgarry Morris",
            "author_rating": 6.65,
            "author_reviews": 194,
            "biography": "Author with an average rating of 6.65/10 from 194 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "038533334X",
            "title": "Charming Billy",
            "composite_score": 7.78,
            "book_rating": 6.8,
            "book_reviews": 102,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/038533334X.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 102 reviews."
        },
        "author_details": {
            "name": "Alice Mcdermott",
            "author_rating": 7.0,
            "author_reviews": 204,
            "biography": "Author with an average rating of 7.0/10 from 204 verified readers."
        }
    },
    {
        "book_details": {
            "isbn": "0451203895",
            "title": "4 Blondes",
            "composite_score": 7.11,
            "book_rating": 5.65,
            "book_reviews": 104,
            "distinct_countries": 6,
            "cover_image": "http://images.amazon.com/images/P/0451203895.01.LZZZZZZZ.jpg",
            "synopsis": "Curated title with verified ratings across 6 countries and 104 reviews."
        },
        "author_details": {
            "name": "Candace Bushnell",
            "author_rating": 5.74,
            "author_reviews": 376,
            "biography": "Author with an average rating of 5.74/10 from 376 verified readers."
        }
    }
];