const PAGE_SIZE = 10;
let currentTab = 'books';
let searchQuery = '';
let displayedCount = 0;
let filteredItems = [];

const booksSection = document.getElementById('books-section');
const authorsSection = document.getElementById('authors-section');
const booksContainer = document.getElementById('books-container');
const authorsContainer = document.getElementById('authors-container');
const btnTabBooks = document.getElementById('btn-tab-books');
const btnTabAuthors = document.getElementById('btn-tab-authors');
const searchInput = document.getElementById('search-input');
const resultsCount = document.getElementById('results-count');
const loadingIndicator = document.getElementById('loading-indicator');
const endMessage = document.getElementById('end-message');
const sentinel = document.getElementById('scroll-sentinel');

// Extragere autori pastrand ordinea sortarii după scorul cartii reprezentative
function getUniqueAuthors(data) {
    const map = new Map();
    data.forEach(item => {
        const name = item.author_details.name;
        if (!map.has(name)) {
            map.set(name, item);
        }
    });
    return Array.from(map.values());
}

// Filtrare optionala fara a afecta ordinea descrescatoare
function applyFilter() {
    const query = searchQuery.trim().toLowerCase();

    if (currentTab === 'books') {
        filteredItems = (typeof enrichedData !== 'undefined' ? enrichedData : []).filter(item => {
            if (!query) return true;
            const title = (item.book_details.title || '').toLowerCase();
            const author = (item.author_details.name || '').toLowerCase();
            const isbn = (item.book_details.isbn || '').toLowerCase();
            return title.includes(query) || author.includes(query) || isbn.includes(query);
        });
    } else {
        const authorsList = getUniqueAuthors(typeof enrichedData !== 'undefined' ? enrichedData : []);
        filteredItems = authorsList.filter(item => {
            if (!query) return true;
            const author = (item.author_details.name || '').toLowerCase();
            const notableBook = (item.book_details.title || '').toLowerCase();
            return author.includes(query) || notableBook.includes(query);
        });
    }

    resultsCount.textContent = `Total items: ${filteredItems.length}`;
    resetAndRender();
}

function resetAndRender() {
    displayedCount = 0;
    booksContainer.innerHTML = '';
    authorsContainer.innerHTML = '';
    endMessage.classList.add('hidden');
    loadMoreItems();
}

function createBookCard(item) {
    const b = item.book_details;
    const a = item.author_details;

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img 
            src="${b.cover_image}" 
            alt="${b.title}" 
            class="book-cover" 
            onerror="this.src='https://via.placeholder.com/110x165?text=No+Cover'"
        >
        <div class="card-content">
            <div>
                <h2 class="card-title">${b.title}</h2>
                <h3 class="card-subtitle">by ${a.name} &bull; <small>ISBN: ${b.isbn}</small></h3>
                <div class="metrics-row">
                    <span class="metric-badge score">Composite Score: ${b.composite_score}</span>
                    <span class="metric-badge">★ Rating: ${b.book_rating}/10</span>
                    <span class="metric-badge">Reviews: ${b.book_reviews}</span>
                    <span class="metric-badge">Countries: ${b.distinct_countries}</span>
                </div>
            </div>
            <p class="synopsis-text">${b.synopsis}</p>
        </div>
    `;
    return card;
}

function createAuthorCard(item) {
    const a = item.author_details;
    const b = item.book_details;

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-content">
            <div>
                <h2 class="card-title">${a.name}</h2>
                <h3 class="card-subtitle">Representative Book: <em>${b.title}</em> (Score: ${b.composite_score})</h3>
                <div class="metrics-row">
                    <span class="metric-badge">Author Avg Rating: ★ ${a.author_rating}/10</span>
                    <span class="metric-badge">Total Author Reviews: ${a.author_reviews}</span>
                </div>
            </div>
            <p class="author-bio">${a.biography}</p>
        </div>
    `;
    return card;
}

function loadMoreItems() {
    if (displayedCount >= filteredItems.length) {
        if (filteredItems.length > 0) {
            endMessage.classList.remove('hidden');
        }
        loadingIndicator.classList.add('hidden');
        return;
    }

    loadingIndicator.classList.remove('hidden');

    const nextBatch = filteredItems.slice(displayedCount, displayedCount + PAGE_SIZE);
    const fragment = document.createDocumentFragment();

    nextBatch.forEach(item => {
        const card = currentTab === 'books' ? createBookCard(item) : createAuthorCard(item);
        fragment.appendChild(card);
    });

    if (currentTab === 'books') {
        booksContainer.appendChild(fragment);
    } else {
        authorsContainer.appendChild(fragment);
    }

    displayedCount += nextBatch.length;
    loadingIndicator.classList.add('hidden');

    if (displayedCount >= filteredItems.length) {
        endMessage.classList.remove('hidden');
    }
}

// Observer pentru scroll infinit
const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        loadMoreItems();
    }
}, {
    rootMargin: '300px'
});

observer.observe(sentinel);

function switchTab(newTab) {
    if (currentTab === newTab) return;
    currentTab = newTab;

    if (currentTab === 'books') {
        booksSection.classList.remove('hidden');
        authorsSection.classList.add('hidden');
        btnTabBooks.classList.add('active');
        btnTabAuthors.classList.remove('active');
    } else {
        authorsSection.classList.remove('hidden');
        booksSection.classList.add('hidden');
        btnTabAuthors.classList.add('active');
        btnTabBooks.classList.remove('active');
    }

    applyFilter();
}

btnTabBooks.addEventListener('click', () => switchTab('books'));
btnTabAuthors.addEventListener('click', () => switchTab('authors'));

let debounceTimer;
searchInput.addEventListener('input', e => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        searchQuery = e.target.value;
        applyFilter();
    }, 200);
});


document.addEventListener('DOMContentLoaded', () => {
    applyFilter();
});