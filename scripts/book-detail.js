// Book detail page functionality

// Get book by ID - fallback implementation if the main one isn't available
function getBookByIdFallback(id) {
    // First try using the global function if available
    if (typeof getBookById === 'function') {
        return getBookById(parseInt(id));
    }

    // Otherwise, check if the books array is available
    if (typeof books !== 'undefined' && Array.isArray(books)) {
        return books.find(book => book.id === parseInt(id));
    }

    // As a last resort, try getting from localStorage directly
    try {
        const storedBooks = localStorage.getItem('books');
        if (storedBooks) {
            const parsedBooks = JSON.parse(storedBooks);
            if (Array.isArray(parsedBooks) && parsedBooks.length > 0) {
                return parsedBooks.find(book => book.id === parseInt(id));
            }
        }
    } catch (error) {
        console.error('Error retrieving books:', error);
    }

    return null;
}

// Initialize the book detail page
function initBookDetail() {
    // Get book ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');

    if (bookId) {
        // Get book by ID
        const book = getBookByIdFallback(parseInt(bookId));

        if (book) {
            displayBookDetail(book);
        } else {
            // Book not found
            showBookNotFound();
        }
    } else {
        // No book ID provided
        showBookNotFound();
    }
}

// Display book details
function displayBookDetail(book) {
    const bookDetailElement = document.getElementById('bookDetail');

    if (bookDetailElement) {
        bookDetailElement.innerHTML = `
            <div class="book-detail-image-container">
                <img src="${book.image}" alt="${book.title}" class="book-detail-image">
            </div>
            <div class="book-detail-info">
                <h1 class="book-detail-title">${book.title}</h1>
                <p class="book-detail-author">نویسنده: ${book.author}</p>
                <div class="book-detail-meta">
                    <p class="book-detail-price">${book.price.toFixed(0)} تومان</p>
                    <p class="book-detail-rating">★ ${book.rating.toFixed(1)}</p>
                    </div>
                    <p class="book-detail-description">${book.description}</p>
                    <div class="book-detail-actions">
                    <p class="book-detail-ratin">  تلفن فروشنده   ${book.phone} </p>
                    <button id="buyButton" class="buy-button">خرید</button>
                    ${isBookInCart(book.id) ? '<span class="in-cart-message">این کتاب در سبد خرید شما موجود است</span>' : ''}
                </div>
            </div>
        `;

        // Setup buy button
        setupBuyButton(book);
    }
}

// Check if book is already in cart
function isBookInCart(bookId) {
    // Check if cart functionality exists
    if (typeof getCart !== 'function') {
        return false;
    }

    const cart = getCart();
    return cart.some(item => item.id === parseInt(bookId));
}

// Show book not found message
function showBookNotFound() {
    const bookDetailElement = document.getElementById('bookDetail');

    if (bookDetailElement) {
        bookDetailElement.innerHTML = `
            <div class="error-message">
                <h2>کتاب یافت نشد</h2>
                <p>متأسفانه کتاب مورد نظر شما یافت نشد.</p>
                <a href="index.html" class="button">بازگشت به صفحه اصلی</a>
            </div>
        `;
    }
}

// Setup buy button
function setupBuyButton(book) {
    const buyButton = document.getElementById('buyButton');

    if (buyButton) {
        const isUserLoggedIn = typeof isLoggedIn === 'function' ? isLoggedIn() : false;

        if (!isUserLoggedIn) {
            buyButton.classList.add('disabled');
            buyButton.textContent = 'برای خرید وارد شوید';

            buyButton.addEventListener('click', () => {
                window.location.href = 'login.html';
            });
        } else {
            // Check if book is already in cart
            if (typeof getCart === 'function' && isBookInCart(book.id)) {
                buyButton.textContent = 'مشاهده سبد خرید';

                buyButton.addEventListener('click', () => {
                    window.location.href = 'cart.html';
                });
            } else {
                buyButton.addEventListener('click', () => {
                    // Add to cart if cart functionality exists
                    if (typeof addToCart === 'function') {
                        const success = addToCart(book);

                        if (success) {
                            // Show success message and update UI
                            alert(`کتاب "${book.title}" به سبد خرید شما اضافه شد!`);

                            // Update cart UI if function exists
                            if (typeof updateCartUI === 'function') {
                                updateCartUI();
                            }

                            // Ask if user wants to view cart
                            if (confirm('آیا می‌خواهید سبد خرید خود را مشاهده کنید؟')) {
                                window.location.href = 'cart.html';
                            } else {
                                // Refresh the current page to update the UI
                                window.location.reload();
                            }
                        } else {
                            alert('خطا در افزودن کتاب به سبد خرید!');
                        }
                    } else {
                        // Fall back to simple purchase confirmation if cart is not available
                        if (confirm(`خرید "${book.title}" به قیمت ${book.price.toFixed(0)} تومان؟`)) {
                            alert('با تشکر از خرید شما!');
                            window.location.href = 'index.html';
                        }
                    }
                });
            }
        }
    }
}

// Run on page load with a small delay to ensure all scripts are loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initBookDetail, 50);
}); 