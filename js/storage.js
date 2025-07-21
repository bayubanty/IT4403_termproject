function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

function addFavorite(id) {
    const list = getFavorites();
    if (!list.includes(id)) {
        list.push(id);
        localStorage.setItem('favorites', JSON.stringify(list));
    }
}

function removeFavorite(id) {
    let list = getFavorites();
    list = list.filter(item => item !== id);
    localStorage.setItem('favorites', JSON.stringify(list));
}

function getWatchlist() {
    return JSON.parse(localStorage.getItem('watchlist')) || [];
}

function addToWatchlist(id) {
    const list = getWatchlist();
    if (!list.includes(id)) {
        list.push(id);
        localStorage.setItem('watchlist', JSON.stringify(list));
    }
}

function removeFromWatchlist(id) {
    let list = getWatchlist();
    list = list.filter(item => item !== id);
    localStorage.setItem('watchlist', JSON.stringify(list));
}

