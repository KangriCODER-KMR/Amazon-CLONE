// Product data with embedded SVG placeholders
const products = [
    {
        id: 1,
        title: "Samsung Galaxy S24 Ultra Smartphone",
        price: 89999,
        originalPrice: 99999,
        category: "electronics",
        rating: 4.5,
        reviewCount: 1250,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23007bff'/%3E%3Ctext x='50%25' y='45%25' font-size='16' text-anchor='middle' fill='white'%3ESamsung Galaxy%3C/text%3E%3Ctext x='50%25' y='55%25' font-size='24' text-anchor='middle' fill='white'%3E📱%3C/text%3E%3C/svg%3E",
        description: "Latest Samsung Galaxy S24 Ultra with advanced camera system, S Pen support, and all-day battery life. Features a stunning 6.8-inch Dynamic AMOLED display."
    },
    {
        id: 2,
        title: "Apple iPhone 15 Pro Max",
        price: 134900,
        originalPrice: 139900,
        category: "electronics",
        rating: 4.8,
        reviewCount: 2100,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23ff6b6b'/%3E%3Ctext x='50%25' y='45%25' font-size='16' text-anchor='middle' fill='white'%3EiPhone 15 Pro%3C/text%3E%3Ctext x='50%25' y='55%25' font-size='24' text-anchor='middle' fill='white'%3E🍎%3C/text%3E%3C/svg%3E",
        description: "The most advanced iPhone yet with titanium design, Action Button, and the powerful A17 Pro chip. Capture stunning photos with the Pro camera system."
    },
    {
        id: 3,
        title: "Sony WH-1000XM5 Wireless Headphones",
        price: 24990,
        originalPrice: 29990,
        category: "electronics",
        rating: 4.6,
        reviewCount: 850,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%2351cf66'/%3E%3Ctext x='50%25' y='45%25' font-size='16' text-anchor='middle' fill='white'%3ESony Headphones%3C/text%3E%3Ctext x='50%25' y='55%25' font-size='24' text-anchor='middle' fill='white'%3E🎧%3C/text%3E%3C/svg%3E",
        description: "Industry-leading noise cancellation with premium sound quality. 30-hour battery life and crystal clear hands-free calling."
    },
    {
        id: 4,
        title: "Nike Air Max 270 Running Shoes",
        price: 8995,
        originalPrice: 12995,
        category: "clothing",
        rating: 4.3,
        reviewCount: 650,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23ffd93d'/%3E%3Ctext x='50%25' y='45%25' font-size='16' text-anchor='middle' fill='black'%3ENike Air Max%3C/text%3E%3Ctext x='50%25' y='55%25' font-size='24' text-anchor='middle' fill='black'%3E👟%3C/text%3E%3C/svg%3E",
        description: "Comfortable running shoes with Max Air unit for exceptional all-day comfort. Perfect for both casual wear and athletic activities."
    },
    {
        id: 5,
        title: "Levi's 501 Original Fit Jeans",
        price: 3999,
        originalPrice: 4999,
        category: "clothing",
        rating: 4.2,
        reviewCount: 920,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%236c5ce7'/%3E%3Ctext x='50%25' y='45%25' font-size='16' text-anchor='middle' fill='white'%3ELevi's Jeans%3C/text%3E%3Ctext x='50%25' y='55%25' font-size='24' text-anchor='middle' fill='white'%3E👖%3C/text%3E%3C/svg%3E",
        description: "Classic straight fit jeans with a timeless look. Made with premium denim for durability and comfort."
    },
    {
        id: 6,
        title: "The Psychology of Money by Morgan Housel",
        price: 399,
        originalPrice: 599,
        category: "books",
        rating: 4.7,
        reviewCount: 1500,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23a29bfe'/%3E%3Ctext x='50%25' y='40%25' font-size='14' text-anchor='middle' fill='white'%3EPsychology%3C/text%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' fill='white'%3Eof Money%3C/text%3E%3Ctext x='50%25' y='60%25' font-size='24' text-anchor='middle' fill='white'%3E📚%3C/text%3E%3C/svg%3E",
        description: "Timeless lessons on wealth, greed, and happiness. Learn how psychology affects our financial decisions."
    },
    {
        id: 7,
        title: "Atomic Habits by James Clear",
        price: 450,
        originalPrice: 650,
        category: "books",
        rating: 4.9,
        reviewCount: 2300,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23fd79a8'/%3E%3Ctext x='50%25' y='45%25' font-size='16' text-anchor='middle' fill='white'%3EAtomic Habits%3C/text%3E%3Ctext x='50%25' y='55%25' font-size='24' text-anchor='middle' fill='white'%3E📖%3C/text%3E%3C/svg%3E",
        description: "An easy and proven way to build good habits and break bad ones. Transform your life with tiny changes."
    },
    {
        id: 8,
        title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
        price: 7999,
        originalPrice: 9999,
        category: "home",
        rating: 4.4,
        reviewCount: 1100,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%2300b894'/%3E%3Ctext x='50%25' y='45%25' font-size='16' text-anchor='middle' fill='white'%3EInstant Pot%3C/text%3E%3Ctext x='50%25' y='55%25' font-size='24' text-anchor='middle' fill='white'%3E🍲%3C/text%3E%3C/svg%3E",
        description: "7 appliances in 1: pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker, and warmer."
    },
    {
        id: 9,
        title: "Dyson V15 Detect Cordless Vacuum",
        price: 47900,
        originalPrice: 54900,
        category: "home",
        rating: 4.5,
        reviewCount: 780,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23e84393'/%3E%3Ctext x='50%25' y='45%25' font-size='16' text-anchor='middle' fill='white'%3EDyson Vacuum%3C/text%3E%3Ctext x='50%25' y='55%25' font-size='24' text-anchor='middle' fill='white'%3E🧹%3C/text%3E%3C/svg%3E",
        description: "Powerful cordless vacuum with laser dust detection and advanced filtration. Up to 60 minutes of run time."
    },
    {
        id: 10,
        title: "Adidas Ultraboost 22 Running Shoes",
        price: 15999,
        originalPrice: 17999,
        category: "sports",
        rating: 4.6,
        reviewCount: 540,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%2300cec9'/%3E%3Ctext x='50%25' y='45%25' font-size='16' text-anchor='middle' fill='white'%3EAdidas Ultraboost%3C/text%3E%3Ctext x='50%25' y='55%25' font-size='24' text-anchor='middle' fill='white'%3E⚽%3C/text%3E%3C/svg%3E",
        description: "Experience incredible energy return with BOOST midsole. Designed for long-distance running comfort."
    },
    {
        id: 11,
        title: "MacBook Pro 14-inch M3 Chip",
        price: 169900,
        originalPrice: 179900,
        category: "electronics",
        rating: 4.8,
        reviewCount: 890,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23636e72'/%3E%3Ctext x='50%25' y='45%25' font-size='16' text-anchor='middle' fill='white'%3EMacBook Pro%3C/text%3E%3Ctext x='50%25' y='55%25' font-size='24' text-anchor='middle' fill='white'%3E💻%3C/text%3E%3C/svg%3E",
        description: "Supercharged by M3 chip for incredible performance. Stunning Liquid Retina XDR display and all-day battery life."
    },
    {
        id: 12,
        title: "Ray-Ban Aviator Classic Sunglasses",
        price: 12999,
        originalPrice: 15999,
        category: "clothing",
        rating: 4.4,
        reviewCount: 1200,
        image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f39c12'/%3E%3Ctext x='50%25' y='45%25' font-size='16' text-anchor='middle' fill='white'%3ERay-Ban Aviator%3C/text%3E%3Ctext x='50%25' y='55%25' font-size='24' text-anchor='middle' fill='white'%3E🕶️%3C/text%3E%3C/svg%3E",
        description: "Iconic aviator style with crystal lenses and lightweight metal frame. 100% UV protection."
    }
];

// Shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProducts = [...products];

// DOM Elements - Initialized after DOM loads
let productsGrid, cartButton, cartCount, searchInput, searchBtn, categorySelect, sortSelect, sectionTitle, noResults;
let productModal, cartModal, modalCloseBtns;

// Initialize DOM elements
function initializeDOMElements() {
    productsGrid = document.getElementById('products-grid');
    cartButton = document.getElementById('cart-button');
    cartCount = document.getElementById('cart-count');
    searchInput = document.getElementById('search-input');
    searchBtn = document.getElementById('search-btn');
    categorySelect = document.getElementById('category-select');
    sortSelect = document.getElementById('sort-select');
    sectionTitle = document.getElementById('section-title');
    noResults = document.getElementById('no-results');
    productModal = document.getElementById('product-modal');
    cartModal = document.getElementById('cart-modal');
    modalCloseBtns = document.querySelectorAll('.close');
    
    console.log('DOM Elements found:', {
        productsGrid: !!productsGrid,
        cartButton: !!cartButton,
        searchInput: !!searchInput
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Amazon Clone initializing...');
    
    try {
        initializeDOMElements();
        
        if (!productsGrid) {
            throw new Error('Products grid not found. Check HTML structure.');
        }
        
        displayProducts(currentProducts);
        updateCartCount();
        setupEventListeners();
        
        console.log('Amazon Clone initialized successfully!');
    } catch (error) {
        console.error('Initialization error:', error);
        showErrorMessage(error.message);
    }
});

// Show error message
function showErrorMessage(message) {
    const grid = document.getElementById('products-grid');
    if (grid) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #fff5f5; border: 2px solid #ff6b6b; border-radius: 8px;">
                <h3>⚠️ Error Loading Products</h3>
                <p>${message}</p>
                <button onclick="location.reload()" style="padding: 10px 20px; background: #ff6b6b; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Refresh Page
                </button>
            </div>
        `;
    }
}

// Setup event listeners
function setupEventListeners() {
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }
    
    if (cartButton) {
        cartButton.addEventListener('click', openCartModal);
    }
    
    // Category navigation
    const categoryLinks = document.querySelectorAll('[data-category]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            filterByCategory(this.dataset.category);
        });
    });
    
    // Modal close buttons
    if (modalCloseBtns) {
        modalCloseBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                closeModal(this.closest('.modal'));
            });
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
}

// Display products with error handling
function displayProducts(productsToShow) {
    if (!productsGrid) {
        console.error('Products grid not found!');
        return;
    }
    
    if (productsToShow.length === 0) {
        productsGrid.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    productsGrid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';
    
    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" 
                     alt="${product.title}" 
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/400x400/f0f0f0/666666?text=Product+Image'"
                     onload="this.style.opacity='1';"
                     style="opacity: 0; transition: opacity 0.3s ease;">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span class="rating-count">(${product.reviewCount})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    ${product.originalPrice > product.price ? 
                        `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                         <span class="discount">${Math.round((1 - product.price / product.originalPrice) * 100)}% off</span>` 
                        : ''}
                </div>
                <button class="add-to-cart" onclick="addToCart(event, ${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Generate star rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Search functionality
function performSearch() {
    if (!searchInput || !categorySelect) return;
    
    const query = searchInput.value.toLowerCase().trim();
    const category = categorySelect.value;
    
    currentProducts = products.filter(product => {
        const matchesSearch = query === '' || 
            product.title.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query);
        
        const matchesCategory = category === 'all' || product.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    displayProducts(currentProducts);
    updateSectionTitle(query, category);
}

// Filter by category
function filterByCategory(category) {
    if (!searchInput || !categorySelect) return;
    
    const query = searchInput.value.toLowerCase().trim();
    
    currentProducts = products.filter(product => {
        const matchesSearch = query === '' || 
            product.title.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query);
        
        const matchesCategory = category === 'all' || product.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    categorySelect.value = category;
    displayProducts(currentProducts);
    updateSectionTitle(query, category);
}

// Sort products
function sortProducts(sortBy) {
    switch (sortBy) {
        case 'price-low':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            currentProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            performSearch();
            return;
    }
    
    displayProducts(currentProducts);
}

// Update section title
function updateSectionTitle(query, category) {
    if (!sectionTitle) return;
    
    let title = 'All Products';
    
    if (query && category && category !== 'all') {
        title = `Search results for "${query}" in ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    } else if (query) {
        title = `Search results for "${query}"`;
    } else if (category && category !== 'all') {
        title = category.charAt(0).toUpperCase() + category.slice(1);
    }
    
    sectionTitle.textContent = title;
}

// Product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !productModal) return;
    
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalStars = document.getElementById('modal-stars');
    const modalReviewCount = document.getElementById('modal-review-count');
    const modalPrice = document.getElementById('modal-price');
    const modalOriginalPrice = document.getElementById('modal-original-price');
    const modalDescription = document.getElementById('modal-description');
    
    if (modalImg) modalImg.src = product.image;
    if (modalTitle) modalTitle.textContent = product.title;
    if (modalStars) modalStars.innerHTML = generateStars(product.rating);
    if (modalReviewCount) modalReviewCount.textContent = `(${product.reviewCount} reviews)`;
    if (modalPrice) modalPrice.textContent = `₹${product.price.toLocaleString()}`;
    if (modalDescription) modalDescription.textContent = product.description;
    
    if (modalOriginalPrice) {
        if (product.originalPrice > product.price) {
            modalOriginalPrice.textContent = `₹${product.originalPrice.toLocaleString()}`;
            modalOriginalPrice.style.display = 'inline';
        } else {
            modalOriginalPrice.style.display = 'none';
        }
    }
    
    // Add to cart button in modal
    const addToCartModalBtn = document.getElementById('add-to-cart-modal');
    if (addToCartModalBtn) {
        addToCartModalBtn.onclick = function() {
            addToCartById(productId);
        };
    }
    
    // Buy now button
    const buyNowBtn = document.querySelector('.buy-now');
    if (buyNowBtn) {
        buyNowBtn.onclick = function() {
            addToCartById(productId);
            closeModal(productModal);
            openCartModal();
        };
    }
    
    productModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Cart functionality
function addToCart(event, productId) {
    event.stopPropagation();
    addToCartById(productId);
}

function addToCartById(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    saveCartToStorage();
    showNotification('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    saveCartToStorage();
    displayCartItems();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            saveCartToStorage();
            displayCartItems();
        }
    }
}

function updateCartCount() {
    if (!cartCount) return;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Cart modal
function openCartModal() {
    if (!cartModal) return;
    displayCartItems();
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartSummary = document.getElementById('cart-summary');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        if (cartEmpty) cartEmpty.style.display = 'block';
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }
    
    cartItemsContainer.style.display = 'block';
    if (cartEmpty) cartEmpty.style.display = 'none';
    if (cartSummary) cartSummary.style.display = 'block';
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');
    
    // Update cart summary
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const itemCountEl = document.getElementById('item-count');
    const cartTotalEl = document.getElementById('cart-total');
    
    if (itemCountEl) itemCountEl.textContent = totalItems;
    if (cartTotalEl) cartTotalEl.textContent = `₹${totalPrice.toLocaleString()}`;
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const confirmed = confirm(`Proceed to checkout?\nTotal: ₹${totalAmount.toLocaleString()}\n\nNote: This is a demo - no actual payment will be processed.`);
    
    if (confirmed) {
        cart = [];
        updateCartCount();
        saveCartToStorage();
        closeModal(cartModal);
        showNotification('Order placed successfully! Thank you for shopping with us.');
    }
}

// Modal utilities
function closeModal(modal) {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 9999;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        transform: translateX(350px);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(350px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal[style*="block"]');
        if (openModal) {
            closeModal(openModal);
        }
    }
});