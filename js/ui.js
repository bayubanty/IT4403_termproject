function renderTrending(movies) {
    const container = $('.trending-container').empty();
    if (!movies || movies.length === 0) {
        container.append('<p>No trending data found.</p>');
        return;
    }

    const grid = $('<div class="movie-grid"></div>');
    movies.forEach(movie => {
        const title = movie.title || movie.name;
        const year = (movie.release_date || movie.first_air_date || '').split('-')[0];

        const card = $(`
            <div class="movie-card">
                <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${title}">
                <div class="movie-info">
                    <h4>${title}</h4>
                    <p>${year}</p>
                </div>
            </div>
        `);
        grid.append(card);
    });

    container.append(grid);
}

