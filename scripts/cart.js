// Shopping Cart functionality

// Get cart from localStorage or initialize empty cart
function getCart() {
    try {
        // Check if user is authenticated
        if (!isLoggedIn()) {
            return [];
        }

        // Get current user
        const currentUser = getCurrentUser();
        if (!currentUser || !currentUser.username) {
            return [];
        }

        // Get cart from localStorage using username as key
        const cartKey = `cart_${currentUser.username}`;
        const cart = localStorage.getItem(cartKey);

        if (cart) {
            return JSON.parse(cart);
        }

        return [];
    } catch (error) {
        console.error('Error getting cart:', error);
        return [];
    }
}

// Save cart to localStorage
function saveCart(cartItems) {
    try {
        // Check if user is authenticated
        if (!isLoggedIn()) {
            return false;
        }

        // Get current user
        const currentUser = getCurrentUser();
        if (!currentUser || !currentUser.username) {
            return false;
        }

        // Save cart to localStorage using username as key
        const cartKey = `cart_${currentUser.username}`;
        localStorage.setItem(cartKey, JSON.stringify(cartItems));

        return true;
    } catch (error) {
        console.error('Error saving cart:', error);
        return false;
    }
}

// Add item to cart
function addToCart(book) {
    try {
        if (!book || !book.id) {
            return false;
        }

        // Get current cart
        const cart = getCart();

        // Check if item already exists in cart
        const existingItem = cart.find(item => item.id === book.id);

        if (existingItem) {
            // Book already in cart, don't add it again
            return true;
        }

        // Add purchase date
        const bookWithDate = {
            ...book,
            purchaseDate: new Date().toISOString()
        };

        // Add book to cart
        cart.push(bookWithDate);

        // Save updated cart
        return saveCart(cart);
    } catch (error) {
        console.error('Error adding to cart:', error);
        return false;
    }
}

// Remove item from cart
function removeFromCart(bookId) {
    try {
        // Get current cart
        const cart = getCart();

        // Filter out the book to remove
        const updatedCart = cart.filter(item => item.id !== parseInt(bookId));

        // Save updated cart
        return saveCart(updatedCart);
    } catch (error) {
        console.error('Error removing from cart:', error);
        return false;
    }
}

// Clear cart completely
function clearCart() {
    try {
        return saveCart([]);
    } catch (error) {
        console.error('Error clearing cart:', error);
        return false;
    }
}

// Get cart item count
function getCartItemCount() {
    try {
        const cart = getCart();
        return cart.length;
    } catch (error) {
        console.error('Error getting cart count:', error);
        return 0;
    }
}

// Update cart UI elements
function updateCartUI() {
    // Find all cart count elements
    const cartCountElements = document.querySelectorAll('.cart-count');

    // Get current cart count
    const count = getCartItemCount();

    // Update all count elements
    cartCountElements.forEach(element => {
        element.textContent = count;

        // Show or hide based on count
        if (count > 0) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    });

    // Show or hide cart link based on login status
    const cartLink = document.getElementById('cartLink');
    if (cartLink) {
        if (isLoggedIn()) {
            cartLink.classList.remove('hidden');
        } else {
            cartLink.classList.add('hidden');
        }
    }
}

// Initialize cart
function initCart() {
    // Update cart UI on load
    updateCartUI();
}

// Run cart initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initCart); 