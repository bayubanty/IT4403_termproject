$(document).ready(function () {
    initApp();

    $(document).on('click', '.nav-link', function (e) {
        e.preventDefault();
        const viewId = $(this).attr('href').substring(1);
        loadView(viewId);
    });

    $('#quick-search').click(function () {
        const query = $('.search-box input').val().trim();
        if (query) loadView('search', { query });
    });

    $('.search-box input').keypress(function (e) {
        if (e.which === 13) $('#quick-search').click();
    });
});

function initApp() {
    checkAuthStatus();
    const hash = window.location.hash.substring(1) || 'home';
    loadView(hash);
}

function loadView(viewId, params = {}) {
    $('.view').removeClass('active');
    $('.nav-link').removeClass('active');
    $(`.nav-link[href="#${viewId}"]`).addClass('active');
    window.location.hash = viewId;

    switch (viewId) {
        case 'home':
            $('#home-view').addClass('active');
            break;
        case 'search':
            // Load search view logic
            break;
        case 'top-movies':
            // Load top movies logic
            break;
        case 'top-shows':
            // Load top shows logic
            break;
        default:
            $('#home-view').addClass('active');
    }
}
