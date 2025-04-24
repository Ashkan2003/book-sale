// Book upload functionality

// Initialize the upload page
function initUpload() {
    // Check if user is logged in
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }

    // Setup upload form
    setupUploadForm();

    // Setup image drag and drop
    setupImageDragAndDrop();
}

// Setup image drag and drop functionality
function setupImageDragAndDrop() {
    const dropArea = document.getElementById('imageDropArea');
    const fileInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const bookImageInput = document.getElementById('bookImage');

    if (!dropArea || !fileInput || !imagePreview || !bookImageInput) return;

    // Click on drop area to open file dialog
    dropArea.addEventListener('click', () => {
        fileInput.click();
    });

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // Highlight drop area when dragging over it
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
        dropArea.classList.add('drag-over');
    }

    function unhighlight() {
        dropArea.classList.remove('drag-over');
    }

    // Handle dropped files
    dropArea.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;

        if (files.length) {
            handleFiles(files);
        }
    }

    // Handle file input change
    fileInput.addEventListener('change', function () {
        if (this.files.length) {
            handleFiles(this.files);
        }
    });

    function handleFiles(files) {
        const file = files[0]; // Only process the first file

        // Check if file is an image
        if (!file.type.match('image.*')) {
            alert('لطفا یک فایل تصویری انتخاب کنید.');
            return;
        }

        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('حجم تصویر باید کمتر از 5 مگابایت باشد.');
            return;
        }

        // Read the file and convert to base64
        const reader = new FileReader();

        reader.onload = function (e) {
            // Display image preview
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="تصویر انتخاب شده">`;
            imagePreview.classList.remove('hidden');

            // Set the base64 data URL to the hidden input
            bookImageInput.value = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}

// Setup upload form
function setupUploadForm() {
    const uploadForm = document.getElementById('uploadForm');

    if (uploadForm) {
        uploadForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const title = document.getElementById('bookTitle').value;
            const author = document.getElementById('bookAuthor').value;
            const description = document.getElementById('bookDescription').value;
            const price = parseFloat(document.getElementById('bookPrice').value);
            const rating = parseFloat(document.getElementById('bookRating').value);
            const image = document.getElementById('bookImage').value;

            // Validate image is provided
            if (!image) {
                alert('لطفا یک تصویر برای کتاب انتخاب کنید.');
                return;
            }

            // Create new book object
            const newBook = {
                title,
                author,
                description,
                price,
                rating,
                image
            };

            // Add book
            addBook(newBook);

            // Show success message
            alert('کتاب با موفقیت آپلود شد!');

            // Redirect to home page
            window.location.href = 'index.html';
        });
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', initUpload); 