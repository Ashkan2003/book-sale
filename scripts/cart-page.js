// Cart page functionality

// Initialize the cart page
function initCartPage() {
    // Check if the user is logged in
    if (!isLoggedIn()) {
        // Redirect to login page if not logged in
        window.location.href = 'login.html?redirect=cart.html';
        return;
    }

    // Display cart items
    displayCartItems();

    // Setup button event listeners
    setupCartActions();
}

// Format date for display
function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (error) {
        return 'تاریخ نامشخص';
    }
}

// Display cart items
function displayCartItems() {
    const cartContainer = document.getElementById('cartContainer');
    const cartActions = document.getElementById('cartActions');

    if (!cartContainer) return;

    // Get cart items
    const cartItems = getCart();

    // Check if cart is empty
    if (!cartItems || cartItems.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart-message">
                <h2>سبد خرید شما خالی است</h2>
                <p>می‌توانید با مراجعه به صفحه اصلی، کتاب‌های مورد نظر خود را انتخاب کنید.</p>
                <a href="index.html" class="button">مشاهده کتاب‌ها</a>
            </div>
        `;

        // Hide cart actions
        if (cartActions) {
            cartActions.classList.add('hidden');
        }
        return;
    }

    // Show cart actions
    if (cartActions) {
        cartActions.classList.remove('hidden');
    }

    // Generate HTML for cart items
    const cartHTML = cartItems.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.title}</h3>
                <p class="cart-item-author">نویسنده: ${item.author}</p>
                <div class="cart-item-meta">
                    <p class="cart-item-price">${item.price.toFixed(0)} تومان</p>
                    <p class="cart-item-rating">★ ${item.rating.toFixed(1)}</p>
                </div>
                <p class="cart-item-date">تاریخ خرید: ${formatDate(item.purchaseDate)}</p>
            </div>
            <button class="remove-item-btn" data-id="${item.id}">×</button>
        </div>
    `).join('');

    // Set cart HTML
    cartContainer.innerHTML = cartHTML;

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-item-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            removeCartItem(id);
        });
    });
}

// Remove item from cart and update UI
function removeCartItem(id) {
    // Remove from cart
    const success = removeFromCart(id);

    if (success) {
        // Update UI
        displayCartItems();
        updateCartUI();
    }
}

// Setup cart action buttons
function setupCartActions() {
    // Continue shopping button
    const continueBtn = document.getElementById('continueShoppingBtn');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Clear cart button
    const clearBtn = document.getElementById('clearCartBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm('آیا مطمئن هستید که می‌خواهید سبد خرید را پاک کنید؟')) {
                clearCart();
                displayCartItems();
                updateCartUI();
            }
        });
    }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', initCartPage); 