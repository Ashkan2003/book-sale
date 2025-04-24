// Auth related functions

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

// Get current user
function getCurrentUser() {
    const userJSON = localStorage.getItem('currentUser');
    return userJSON ? JSON.parse(userJSON) : null;
}

// Update UI based on authentication status
function updateAuthUI() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const uploadBtn = document.getElementById('uploadBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const cartLink = document.getElementById('cartLink');

    if (isLoggedIn()) {
        // User is logged in
        if (loginBtn) loginBtn.classList.add('hidden');
        if (signupBtn) signupBtn.classList.add('hidden');
        if (uploadBtn) uploadBtn.classList.remove('hidden');
        if (logoutBtn) logoutBtn.classList.remove('hidden');
        if (cartLink) cartLink.classList.remove('hidden');
    } else {
        // User is not logged in
        if (loginBtn) loginBtn.classList.remove('hidden');
        if (signupBtn) signupBtn.classList.remove('hidden');
        if (uploadBtn) uploadBtn.classList.add('hidden');
        if (logoutBtn) logoutBtn.classList.add('hidden');
        if (cartLink) cartLink.classList.add('hidden');
    }
}

// Setup login button links
function setupAuthLinks() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const uploadBtn = document.getElementById('uploadBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginBtn) {
        loginBtn.href = 'login.html';
    }

    if (signupBtn) {
        signupBtn.href = 'signup.html';
    }

    if (uploadBtn) {
        uploadBtn.href = 'upload.html';
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }
}

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Setup login form
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Get users from localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');

            // Find user
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                // Store current user
                localStorage.setItem('currentUser', JSON.stringify(user));

                // Redirect to home page
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }
}

// Setup signup form
function setupSignupForm() {
    const signupForm = document.getElementById('signupForm');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('newUsername').value;
            const password = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Validate passwords match
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            // Get users from localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');

            // Check if username already exists
            if (users.some(u => u.username === username)) {
                alert('Username already exists');
                return;
            }

            // Add new user
            users.push({ username, password });

            // Save users to localStorage
            localStorage.setItem('users', JSON.stringify(users));

            // Login the user
            localStorage.setItem('currentUser', JSON.stringify({ username, password }));

            // Redirect to home page
            window.location.href = 'index.html';
        });
    }
}

// Check if user is logged in on restricted pages
function checkAuth() {
    // Pages that require authentication
    const restrictedPages = ['upload.html'];

    // Current page
    const currentPage = window.location.pathname.split('/').pop();

    // Check if current page requires authentication
    if (restrictedPages.includes(currentPage) && !isLoggedIn()) {
        window.location.href = 'login.html';
    }
}

// Initialize auth
function initAuth() {
    updateAuthUI();
    setupAuthLinks();
    setupLoginForm();
    setupSignupForm();
    checkAuth();
}

// Run on page load
document.addEventListener('DOMContentLoaded', initAuth);
