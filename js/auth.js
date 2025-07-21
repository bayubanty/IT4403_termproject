// Simple auth placeholders
function checkAuthStatus() {
    const username = localStorage.getItem('movie_user');
    if (username) {
        $('#login-btn').hide();
        $('#user-profile').show().text(`Welcome, ${username}`);
    } else {
        $('#login-btn').show();
        $('#user-profile').hide();
    }
}

function loginUser(username) {
    localStorage.setItem('movie_user', username);
    checkAuthStatus();
}

function logoutUser() {
    localStorage.removeItem('movie_user');
    checkAuthStatus();
}

