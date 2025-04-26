// Sample book data with Persian titles
let books = [

    {
        id: 1,
        title: "گتسبی بزرگ",
        author: "اف. اسکات فیتزجرالد",
        description: "داستانی در دوران جاز در لانگ آیلند، این رمان تعاملات راوی نیک کاراوی را با میلیاردر اسرارآمیز جی گتسبی و وسواس گتسبی برای اتحاد مجدد با عشق سابقش، دیزی بوکانان به تصویر می‌کشد.",
        price: 129000,
        rating: 4.5,
        phone: "09140124008",
        image: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
    },
    {
        id: 2,
        title: "کشتن مرغ مقلد",
        author: "هارپر لی",
        description: "رمان فراموش نشدنی از دوران کودکی در یک شهر جنوبی خواب‌آلود و بحران وجدانی که آن را تکان داد. داستانی گیرا، دل‌آزار و کاملاً قابل توجه از بلوغ در جنوبی که با تعصب مهلک مسموم شده است.",
        price: 149000,
        rating: 4.8,
        phone: "09140124008",
        image: "https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4"
    },
    {
        id: 3,
        title: "۱۹۸۴",
        author: "جورج اورول",
        description: "در میان متون برجسته قرن بیستم، هزار و نهصد و هشتاد و چهار اثری نادر است که با واقعی‌تر شدن برزخ آینده‌نگرانه‌اش، ترسناک‌تر می‌شود.",
        price: 119000,
        rating: 4.7,
        phone: "09140124008",
        image: "https://fastly.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ"
    },
    {
        id: 4,
        title: "غرور و تعصب",
        author: "جین آستین",
        description: "از زمان موفقیت فوری آن در سال ۱۸۱۳، غرور و تعصب یکی از محبوب‌ترین رمان‌ها در زبان انگلیسی باقی مانده است.",
        price: 99000,
        rating: 4.6,
        phone: "09140124008",
        image: "https://fastly.picsum.photos/id/180/2400/1600.jpg?hmac=Ig-CXcpNdmh51k3kXpNqNqcDYTwXCIaonYiBOnLXBb8"
    },
    {
        id: 5,
        title: "هابیت",
        author: "جی.آر.آر. تالکین",
        description: "بیلبو بگینز هابیتی است که از زندگی راحت و بی‌بلندپروازی لذت می‌برد، و به ندرت از آشپزخانه یا سردابش دورتر می‌رود. اما آرامش او هنگامی که جادوگر گندالف و گروهی از دورف‌ها دم در خانه‌اش ظاهر می‌شوند، به هم می‌ریزد.",
        price: 159000,
        rating: 4.9,
        phone: "09140124008",
        image: "https://fastly.picsum.photos/id/214/2729/2047.jpg?hmac=sbADnAldkjZ_C8bOEoXFBSHedcFRZYO_GPg3eHwQ5m0"
    },
    {
        id: 6,
        title: "ناطور دشت",
        author: "جی.دی. سلینجر",
        description: "قهرمان-راوی ناطور دشت کودکی باستانی شانزده ساله، اهل نیویورک به نام هولدن کالفیلد است. از طریق شرایطی که تمایل به توصیف بزرگسالانه و دست دوم را منتفی می‌کند، او مدرسه شبانه‌روزی خود در پنسیلوانیا را ترک می‌کند و برای سه روز به صورت زیرزمینی در نیویورک سیتی می‌رود.",
        price: 109000,
        rating: 4.98,
        phone: "09140124008",
        image: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
    },
    {
        id: 7,
        title: "صد سال تنهایی",
        author: "گابریل گارسیا مارکز",
        description: "داستان حماسی خاندان بوئندیا و هفت نسل آن‌ها در شهر افسانه‌ای ماکوندو. این رمان ترکیبی از واقعیت و افسانه است که سبک رئالیسم جادویی را به اوج خود می‌رساند.",
        price: 189000,
        rating: 4.9,
        phone: "09140124008",
        image: "https://fastly.picsum.photos/id/318/3264/2448.jpg?hmac=zkYZ29-Ww_A4O_kZ3gjlpFQuEYELWgeM6aI_CMG01BU"
    },
    {
        id: 8,
        title: "جنگ و صلح",
        author: "لئو تولستوی",
        description: "یکی از بزرگترین رمان‌های ادبیات جهان که داستان زندگی پنج خانواده اشرافی روسی را در دوره جنگ‌های ناپلئونی روایت می‌کند.",
        price: 215000,
        rating: 4.7,
        phone: "09140124008",
        image: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
    },
    {
        id: 9,
        title: "دن کیشوت",
        author: "میگل دِ سِروانتِس",
        description: "داستان شوالیه‌ای خیال‌پرداز که همراه با خدمتکارش سانچو پانزا به دنبال ماجراجویی می‌رود و با آسیاب‌های بادی می‌جنگد.",
        price: 145000,
        rating: 4.6,
        phone: "09140124008",
        image: "https://fastly.picsum.photos/id/318/3264/2448.jpg?hmac=zkYZ29-Ww_A4O_kZ3gjlpFQuEYELWgeM6aI_CMG01BU"
    },
    {
        id: 10,
        title: "بوف کور",
        author: "صادق هدایت",
        description: "یکی از مهم‌ترین رمان‌های مدرن فارسی که روایتی تاریک و رؤیاگونه از زندگی درونی یک مرد منزوی ارائه می‌دهد.",
        price: 85000,
        rating: 4.8,
        phone: "09140124008",
        image: "https://fastly.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU"
    },
    {
        id: 11,
        title: "شازده کوچولو",
        author: "آنتوان دو سنت‌اگزوپری",
        description: "داستان دیدار خلبانی سقوط کرده در صحرا با پسربچه‌ای مرموز و فلسفی از سیاره‌ای دیگر. این کتاب با زبانی ساده، مفاهیم عمیقی درباره زندگی و انسانیت بیان می‌کند.",
        price: 78000,
        rating: 4.9,
        phone: "09140124008",
        image: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
    },
    {
        id: 12,
        title: "مسخ",
        author: "فرانتس کافکا",
        description: "داستان گرگور سامسا، فروشنده‌ای که یک روز صبح از خواب بیدار می‌شود و متوجه می‌شود به یک حشره غول‌پیکر تبدیل شده است. این اثر کلاسیک کافکا، تصویری تلخ و نمادین از بیگانگی انسان مدرن ارائه می‌دهد.",
        price: 92000,
        rating: 4.5,
        phone: "09140124008",
        image: "https://fastly.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU"
    }
];

// Initialize books data
function initBooks() {
    try {
        // Check if books exist in localStorage
        const storedBooks = localStorage.getItem('books');

        if (!storedBooks) {
            // Save sample books to localStorage
            localStorage.setItem('books', JSON.stringify(books));
        } else {
            // Get books from localStorage
            const parsedBooks = JSON.parse(storedBooks);

            // Make sure we have valid books data
            if (!parsedBooks || !Array.isArray(parsedBooks) || parsedBooks.length === 0) {
                localStorage.setItem('books', JSON.stringify(books));
            } else {
                books = parsedBooks;
            }
        }
    } catch (error) {
        console.error('Error initializing books:', error);
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Get all books
function getAllBooks() {
    try {
        const storedBooks = localStorage.getItem('books');
        if (!storedBooks) {
            initBooks();
            return books;
        }

        const parsedBooks = JSON.parse(storedBooks);
        if (!parsedBooks || !Array.isArray(parsedBooks) || parsedBooks.length === 0) {
            initBooks();
            return books;
        }

        return parsedBooks;
    } catch (error) {
        console.error('Error getting books:', error);
        return books;
    }
}

// Get book by ID
function getBookById(id) {
    const books = getAllBooks();
    return books.find(book => book.id === parseInt(id));
}

// Add new book
function addBook(book) {
    const books = getAllBooks();

    // Generate new ID (max ID + 1)
    const maxId = books.reduce((max, book) => Math.max(max, book.id), 0);
    book.id = maxId + 1;

    // Add new book
    books.push(book);

    // Save to localStorage
    localStorage.setItem('books', JSON.stringify(books));

    return book;
}

// Display books on home page
function displayBooks() {
    const booksContainer = document.getElementById('booksContainer');

    if (booksContainer) {
        // Generate HTML for books
        const booksHTML = books.map(book => `
            <div class="book-card" data-id="${book.id}">
                <img src="${book.image}" alt="${book.title}" class="book-image">
                <div class="book-info">
                    <h2 class="book-title">${book.title}</h2>
                    <p class="book-author">نویسنده: ${book.author}</p>
                    <p class="book-price">${book.price.toFixed(0)} تومان</p>
                    <p class="book-rating">★ ${book.rating.toFixed(1)}</p>
                    <p class="book-description">${book.description}</p>
                </div>
            </div>
        `).join('');

        // Set the HTML content
        booksContainer.innerHTML = booksHTML;

        // Add click event to book cards
        document.querySelectorAll('.book-card').forEach(card => {
            card.addEventListener('click', () => {
                const bookId = card.getAttribute('data-id');
                window.location.href = `book-detail.html?id=${bookId}`;
            });
        });
    }
}

// Initialize books and display them when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initBooks();
    displayBooks();
}); 