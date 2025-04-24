// Main application logic

// Initialize app
function initApp() {
    // Initialize authentication (handles in auth.js)

    // Setup navigation
    setupNavigation();
}

// Setup navigation and UI interactions
function setupNavigation() {
    // Update UI based on authentication status
    updateAuthUI();

    // Setup upload button
    const uploadBtn = document.getElementById('uploadBtn');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', (e) => {
            if (!isLoggedIn()) {
                e.preventDefault();
                window.location.href = 'login.html';
            }
        });
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', initApp); 