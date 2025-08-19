// Slicezee Website JavaScript
// Global Variables
let currentSection = 'home';
let cart = [];
let products = {};
let orders = [];
let currentFilter = 'all';
let currentOrderFilter = 'all';
let posCart = [];

// Product Data - Based on conversation with user
const productData = {
    chopped_vegetables: [
        { id: 'cv1', name: 'Ash Gourd', tamil_name: 'சாம்பல் பூசணிக்காய்', price_250: 8, price_500: 15, price_1000: 30, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv2', name: 'Baby Corn', tamil_name: 'சிறிய மக்காச்சோளம்', price_250: 20, price_500: 38, price_1000: 80, image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv3', name: 'Baby Potato', tamil_name: 'பேபி உருளை', price_250: 15, price_500: 28, price_1000: 60, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv4', name: 'Banana Flower', tamil_name: 'வாழைப்பூ', price_250: 23, price_500: 45, price_1000: 90, image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv5', name: 'Beetroot', tamil_name: 'பீட்ரூட்', price_250: 10, price_500: 18, price_1000: 40, image: 'https://images.unsplash.com/photo-1544465541-ce0bc9a9b9f6?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv6', name: 'Bitter Gourd', tamil_name: 'பாகற்காய்', price_250: 6, price_500: 12, price_1000: 25, image: 'https://images.unsplash.com/photo-1626318738270-7f8fb01d7120?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv7', name: 'Bottle Gourd', tamil_name: 'சுரைக்காய்', price_250: 5, price_500: 10, price_1000: 20, image: 'https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv8', name: 'Brinjal (Big)', tamil_name: 'பெரிய கத்திரிக்காய்', price_250: 9, price_500: 17, price_1000: 35, image: 'https://images.unsplash.com/photo-1638131075816-25b3de0851d5?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv9', name: 'Brinjal', tamil_name: 'கத்திரிக்காய்', price_250: 8, price_500: 15, price_1000: 30, image: 'https://images.unsplash.com/photo-1581499645066-a0ba6a6b4aa8?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv10', name: 'Broad Beans', tamil_name: 'அவரைக்காய்', price_250: 11, price_500: 22, price_1000: 45, image: 'https://images.unsplash.com/photo-1572441621971-15ddf2a7a84d?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv11', name: 'Cabbage', tamil_name: 'முட்டைக்கோஸ்', price_250: 10, price_500: 18, price_1000: 40, image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv12', name: 'Capsicum', tamil_name: 'குடைமிளகாய்', price_250: 15, price_500: 28, price_1000: 60, image: 'https://images.unsplash.com/photo-1550116537-67d35b41ce48?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv13', name: 'Carrot', tamil_name: 'கேரட்', price_250: 11, price_500: 22, price_1000: 45, image: 'https://images.unsplash.com/photo-1552925073-5bfb9042bb8d?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv14', name: 'Cauliflower', tamil_name: 'காலிஃபிளவர்', price_250: 13, price_500: 25, price_1000: 50, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv15', name: 'Tomato', tamil_name: 'தக்காளி', price_250: 8, price_500: 15, price_1000: 30, image: 'https://images.unsplash.com/photo-1546470427-e26264be0b0b?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv16', name: 'Onion Big', tamil_name: 'பெரிய வெங்காயம்', price_250: 10, price_500: 18, price_1000: 40, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv17', name: 'Onion Green', tamil_name: 'பச்சை வெங்காயம்', price_250: 9, price_500: 17, price_1000: 35, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv18', name: 'Potato', tamil_name: 'உருளைக்கிழங்கு', price_250: 8, price_500: 15, price_1000: 30, image: 'https://images.unsplash.com/photo-1508313880080-c4bef43d8cb1?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv19', name: 'Green Chilli', tamil_name: 'பச்சை மிளகாய்', price_250: 20, price_500: 38, price_1000: 80, image: 'https://images.unsplash.com/photo-1583023874762-832cdeac2871?w=400&h=300&fit=crop', category: 'chopped_vegetables' },
        { id: 'cv20', name: 'Ladies Finger', tamil_name: 'வெண்டைக்காய்', price_250: 8, price_500: 15, price_1000: 30, image: 'https://images.unsplash.com/photo-1626318738270-7f8fb01d7120?w=400&h=300&fit=crop', category: 'chopped_vegetables' }
    ],
    peeled_vegetables: [
        { id: 'pv1', name: 'Sambar Onion', tamil_name: 'சாம்பல் வெங்காயம்', price_250: 25, price_500: 48, price_1000: 100, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop', category: 'peeled_vegetables' },
        { id: 'pv2', name: 'Garlic', tamil_name: 'பூண்டு', price_250: 38, price_500: 73, price_1000: 150, image: 'https://images.unsplash.com/photo-1604908799297-8b7b2d8e2bba?w=400&h=300&fit=crop', category: 'peeled_vegetables' },
        { id: 'pv3', name: 'Ginger', tamil_name: 'இஞ்சி', price_250: 30, price_500: 58, price_1000: 120, image: 'https://images.unsplash.com/photo-1542827543-9786fb41fcda?w=400&h=300&fit=crop', category: 'peeled_vegetables' },
        { id: 'pv4', name: 'Carrot (peeled)', tamil_name: 'கேரட்', price_250: 13, price_500: 25, price_1000: 50, image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=300&fit=crop', category: 'peeled_vegetables' },
        { id: 'pv5', name: 'Potato (peeled)', tamil_name: 'உருளைக்கிழங்கு', price_250: 10, price_500: 18, price_1000: 40, image: 'https://images.unsplash.com/photo-1508313880080-c4bef43d8cb1?w=400&h=300&fit=crop', category: 'peeled_vegetables' }
    ],
    leafy_greens: [
        { id: 'lg1', name: 'Amaranth Leaves', tamil_name: 'சிறு கீரை', price_250: 15, price_500: 28, price_1000: 60, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop', category: 'leafy_greens' },
        { id: 'lg2', name: 'Colocasia Leaves', tamil_name: 'சேப்பங்கிழங்கு கீரை', price_250: 13, price_500: 25, price_1000: 50, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop', category: 'leafy_greens' },
        { id: 'lg3', name: 'Coriander Leaves', tamil_name: 'கொத்துமல்லி', price_250: 20, price_500: 38, price_1000: 80, image: 'https://images.unsplash.com/photo-1562585520-9b7b88de0c8c?w=400&h=300&fit=crop', category: 'leafy_greens' },
        { id: 'lg4', name: 'Curry Leaves', tamil_name: 'கறிவேப்பிலை', price_250: 23, price_500: 45, price_1000: 90, image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop', category: 'leafy_greens' },
        { id: 'lg5', name: 'Mint Leaves', tamil_name: 'புதினா', price_250: 18, price_500: 35, price_1000: 70, image: 'https://images.unsplash.com/photo-1507140179158-c0c8e33ae2e1?w=400&h=300&fit=crop', category: 'leafy_greens' },
        { id: 'lg6', name: 'Mustard Leaves', tamil_name: 'கடுகு இலைகள்', price_250: 15, price_500: 28, price_1000: 60, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop', category: 'leafy_greens' },
        { id: 'lg7', name: 'Sorrel Leaves', tamil_name: 'புளிச்ச கீரை', price_250: 15, price_500: 28, price_1000: 60, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop', category: 'leafy_greens' },
        { id: 'lg8', name: 'Spinach', tamil_name: 'கீரை', price_250: 15, price_500: 28, price_1000: 60, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop', category: 'leafy_greens' }
    ]
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    loadCart();
    loadOrders();
    setupEventListeners();
    showSection('home');
    updateCartUI();
    renderProducts();
    renderAdminDashboard();
});

// Initialize products data
function initializeProducts() {
    products = {};
    Object.keys(productData).forEach(category => {
        productData[category].forEach(product => {
            products[product.id] = product;
        });
    });
}

// Event Listeners Setup
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('href').substring(1);
            showSection(section);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Form submissions
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }
}

// Navigation Functions
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`[href="#${sectionId}"]`).classList.add('active');
    currentSection = sectionId;

    if (sectionId === 'shop') {
        renderProducts();
    } else if (sectionId === 'admin') {
        renderAdminDashboard();
    }
}

function toggleMobileMenu() {
    // Mobile menu functionality
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Product Display Functions
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    let productsToShow = [];
    
    if (currentFilter === 'all') {
        Object.values(products).forEach(product => {
            productsToShow.push(product);
        });
    } else {
        productsToShow = productData[currentFilter] || [];
    }

    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card" onclick="openProductModal('${product.id}')">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-tamil">${product.tamil_name}</p>
                <div class="product-prices">
                    <div class="price-option" data-quantity="250" data-price="${product.price_250}">
                        <span class="quantity-label">250g</span>
                        <span class="price-label">₹${product.price_250}</span>
                    </div>
                    <div class="price-option" data-quantity="500" data-price="${product.price_500}">
                        <span class="quantity-label">500g</span>
                        <span class="price-label">₹${product.price_500}</span>
                    </div>
                    <div class="price-option" data-quantity="1000" data-price="${product.price_1000}">
                        <span class="quantity-label">1kg</span>
                        <span class="price-label">₹${product.price_1000}</span>
                    </div>
                </div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCartQuick('${product.id}', 250, ${product.price_250})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function filterProducts(filter) {
    currentFilter = filter;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderProducts();
    showSection('shop');
}

function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const productsGrid = document.getElementById('productsGrid');
    
    if (!searchTerm) {
        renderProducts();
        return;
    }

    const filteredProducts = Object.values(products).filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.tamil_name.includes(searchTerm)
    );

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="openProductModal('${product.id}')">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-tamil">${product.tamil_name}</p>
                <div class="product-prices">
                    <div class="price-option" data-quantity="250" data-price="${product.price_250}">
                        <span class="quantity-label">250g</span>
                        <span class="price-label">₹${product.price_250}</span>
                    </div>
                    <div class="price-option" data-quantity="500" data-price="${product.price_500}">
                        <span class="quantity-label">500g</span>
                        <span class="price-label">₹${product.price_500}</span>
                    </div>
                    <div class="price-option" data-quantity="1000" data-price="${product.price_1000}">
                        <span class="quantity-label">1kg</span>
                        <span class="price-label">₹${product.price_1000}</span>
                    </div>
                </div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCartQuick('${product.id}', 250, ${product.price_250})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Product Modal Functions
function openProductModal(productId) {
    const product = products[productId];
    if (!product) return;

    const modal = document.getElementById('productModal');
    const productDetails = document.getElementById('productDetails');
    
    productDetails.innerHTML = `
        <div style="padding: 2rem;">
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px; margin-bottom: 1rem;">
            <h2 style="color: #228B22; margin-bottom: 0.5rem;">${product.name}</h2>
            <p style="color: #666; margin-bottom: 1rem; font-size: 1.1rem;">${product.tamil_name}</p>
            
            <div class="product-prices" style="margin-bottom: 2rem;">
                <div class="price-option" data-quantity="250" data-price="${product.price_250}" onclick="selectPriceOption(this)">
                    <span class="quantity-label">250g</span>
                    <span class="price-label">₹${product.price_250}</span>
                </div>
                <div class="price-option" data-quantity="500" data-price="${product.price_500}" onclick="selectPriceOption(this)">
                    <span class="quantity-label">500g</span>
                    <span class="price-label">₹${product.price_500}</span>
                </div>
                <div class="price-option" data-quantity="1000" data-price="${product.price_1000}" onclick="selectPriceOption(this)">
                    <span class="quantity-label">1kg</span>
                    <span class="price-label">₹${product.price_1000}</span>
                </div>
            </div>
            
            <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 2rem;">
                <label>Quantity:</label>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="changeModalQuantity(-1)">-</button>
                    <span class="qty-display" id="modalQuantity">1</span>
                    <button class="qty-btn" onclick="changeModalQuantity(1)">+</button>
                </div>
            </div>
            
            <button class="add-to-cart" style="width: 100%;" onclick="addToCartFromModal('${productId}')">Add to Cart</button>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Select first price option by default
    modal.querySelector('.price-option').click();
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

function selectPriceOption(element) {
    // Remove selected class from all options
    element.parentElement.querySelectorAll('.price-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    element.classList.add('selected');
}

function changeModalQuantity(change) {
    const quantityElement = document.getElementById('modalQuantity');
    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity = Math.max(1, currentQuantity + change);
    quantityElement.textContent = currentQuantity;
}

// Cart Functions
function addToCartQuick(productId, quantity, price) {
    addToCart(productId, quantity, price, 1);
}

function addToCartFromModal(productId) {
    const modal = document.getElementById('productModal');
    const selectedOption = modal.querySelector('.price-option.selected');
    const modalQuantity = parseInt(document.getElementById('modalQuantity').textContent);
    
    if (selectedOption) {
        const quantity = parseInt(selectedOption.dataset.quantity);
        const price = parseInt(selectedOption.dataset.price);
        addToCart(productId, quantity, price, modalQuantity);
        closeProductModal();
    }
}

function addToCart(productId, quantity, price, cartQuantity = 1) {
    const product = products[productId];
    if (!product) return;

    // Check if item already exists in cart
    const existingItem = cart.find(item => 
        item.productId === productId && item.quantity === quantity
    );

    if (existingItem) {
        existingItem.cartQuantity += cartQuantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity,
            price: price,
            cartQuantity: cartQuantity,
            name: product.name,
            tamil_name: product.tamil_name,
            image: product.image
        });
    }

    updateCartUI();
    saveCart();
    showMessage('Added to cart!', 'success');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
    saveCart();
}

function updateCartQuantity(index, change) {
    if (cart[index]) {
        cart[index].cartQuantity = Math.max(1, cart[index].cartQuantity + change);
        updateCartUI();
        saveCart();
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.cartQuantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cartItems) {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.quantity}g - ₹${item.price}</p>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateCartQuantity(${index}, -1)">-</button>
                        <span class="qty-display">${item.cartQuantity}</span>
                        <button class="qty-btn" onclick="updateCartQuantity(${index}, 1)">+</button>
                        <button class="qty-btn" style="background: #dc2626; margin-left: 1rem;" onclick="removeFromCart(${index})">×</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.cartQuantity), 0);
    if (cartTotal) cartTotal.textContent = total;
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');
}

function saveCart() {
    localStorage.setItem('slicezee_cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('slicezee_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Checkout Functions
function checkout() {
    if (cart.length === 0) {
        showMessage('Your cart is empty!', 'error');
        return;
    }

    const modal = document.getElementById('checkoutModal');
    const orderSummary = document.getElementById('orderSummary');
    const checkoutTotal = document.getElementById('checkoutTotal');

    // Update order summary
    orderSummary.innerHTML = cart.map(item => `
        <div class="summary-item">
            <span>${item.name} (${item.quantity}g) × ${item.cartQuantity}</span>
            <span>₹${item.price * item.cartQuantity}</span>
        </div>
    `).join('');

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.cartQuantity), 0);
    checkoutTotal.textContent = total;

    modal.classList.add('active');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
}

function handleCheckout(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const orderData = {
        id: 'ORD' + Date.now(),
        customerName: document.getElementById('customerName').value,
        customerPhone: document.getElementById('customerPhone').value,
        customerEmail: document.getElementById('customerEmail').value,
        deliveryAddress: document.getElementById('deliveryAddress').value,
        deliveryNotes: document.getElementById('deliveryNotes').value,
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.cartQuantity), 0),
        status: 'pending',
        orderDate: new Date().toISOString(),
        deliveryDate: getNextDeliveryDate()
    };

    // Save order
    orders.push(orderData);
    saveOrders();

    // Clear cart
    cart = [];
    updateCartUI();
    saveCart();

    // Close modals
    closeCheckoutModal();
    toggleCart();

    // Show success message
    showMessage(`Order placed successfully! Order ID: ${orderData.id}`, 'success');

    // Reset form
    document.getElementById('checkoutForm').reset();
}

function getNextDeliveryDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(7, 0, 0, 0);
    return tomorrow.toISOString();
}

// Admin Dashboard Functions
function renderAdminDashboard() {
    updateAdminStats();
    renderOrdersTab();
    renderProductsTab();
}

function updateAdminStats() {
    const today = new Date().toDateString();
    const todayOrders = orders.filter(order => 
        new Date(order.orderDate).toDateString() === today
    );
    
    const todaySales = todayOrders.reduce((sum, order) => sum + order.total, 0);
    const pendingOrders = orders.filter(order => order.status === 'pending').length;

    document.getElementById('todaySales').textContent = '₹' + todaySales;
    document.getElementById('ordersToday').textContent = todayOrders.length;
    document.getElementById('pendingOrders').textContent = pendingOrders;
}

function showAdminTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName + 'Tab').classList.add('active');
    event.target.classList.add('active');
    
    // Load tab content
    switch(tabName) {
        case 'orders':
            renderOrdersTab();
            break;
        case 'products':
            renderProductsTab();
            break;
        case 'reports':
            renderReportsTab();
            break;
        case 'pos':
            renderPOSTab();
            break;
    }
}

function renderOrdersTab() {
    const ordersList = document.getElementById('ordersList');
    if (!ordersList) return;

    let ordersToShow = orders;
    if (currentOrderFilter !== 'all') {
        ordersToShow = orders.filter(order => order.status === currentOrderFilter);
    }

    ordersList.innerHTML = ordersToShow.map(order => `
        <div class="order-item">
            <div class="order-status status-${order.status}">${order.status}</div>
            <div class="order-info">
                <h4>Order #${order.id}</h4>
                <div class="order-details">
                    <p><strong>${order.customerName}</strong> - ${order.customerPhone}</p>
                    <p>${order.deliveryAddress}</p>
                    <p>Items: ${order.items.length} | Total: ₹${order.total}</p>
                    <p>Order Date: ${new Date(order.orderDate).toLocaleDateString()}</p>
                </div>
            </div>
            <div class="order-actions">
                ${order.status === 'pending' ? `<button class="action-btn" onclick="updateOrderStatus('${order.id}', 'accepted')">Accept</button>` : ''}
                ${order.status === 'accepted' ? `<button class="action-btn" onclick="updateOrderStatus('${order.id}', 'packed')">Mark Packed</button>` : ''}
                ${order.status === 'packed' ? `<button class="action-btn" onclick="updateOrderStatus('${order.id}', 'delivered')">Mark Delivered</button>` : ''}
                <button class="action-btn secondary" onclick="viewOrderDetails('${order.id}')">View Details</button>
                <button class="action-btn secondary" onclick="generateInvoice('${order.id}')">Invoice</button>
            </div>
        </div>
    `).join('');
}

function renderProductsTab() {
    const productsManagement = document.getElementById('productsManagement');
    if (!productsManagement) return;

    productsManagement.innerHTML = Object.values(products).map(product => `
        <div class="product-edit-item">
            <div class="product-edit-info">
                <h4>${product.name}</h4>
                <p>${product.tamil_name}</p>
            </div>
            <div class="price-inputs">
                <div>
                    <label>250g:</label>
                    <input type="number" class="price-input" value="${product.price_250}" id="price_250_${product.id}">
                </div>
                <div>
                    <label>500g:</label>
                    <input type="number" class="price-input" value="${product.price_500}" id="price_500_${product.id}">
                </div>
                <div>
                    <label>1kg:</label>
                    <input type="number" class="price-input" value="${product.price_1000}" id="price_1000_${product.id}">
                </div>
            </div>
            <button class="save-btn" onclick="updateProductPrices('${product.id}')">Save</button>
        </div>
    `).join('');
}

function renderPOSTab() {
    const posProductsList = document.getElementById('posProductsList');
    if (!posProductsList) return;

    posProductsList.innerHTML = Object.values(products).map(product => `
        <div class="pos-product-item" onclick="addToPOS('${product.id}', 250, ${product.price_250})">
            <div>
                <strong>${product.name}</strong>
                <small>${product.tamil_name}</small>
            </div>
            <span>₹${product.price_250}/250g</span>
        </div>
    `).join('');

    updatePOSCart();
}

function filterOrders(status) {
    currentOrderFilter = status;
    
    document.querySelectorAll('.orders-filters .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderOrdersTab();
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        saveOrders();
        renderOrdersTab();
        updateAdminStats();
        
        // Send notification (simulated)
        showMessage(`Order ${orderId} updated to ${newStatus}. Customer notified.`, 'success');
    }
}

function updateProductPrices(productId) {
    const product = products[productId];
    if (product) {
        product.price_250 = parseInt(document.getElementById(`price_250_${productId}`).value);
        product.price_500 = parseInt(document.getElementById(`price_500_${productId}`).value);
        product.price_1000 = parseInt(document.getElementById(`price_1000_${productId}`).value);
        
        // Update in productData as well
        Object.keys(productData).forEach(category => {
            const productIndex = productData[category].findIndex(p => p.id === productId);
            if (productIndex !== -1) {
                productData[category][productIndex] = { ...product };
            }
        });
        
        showMessage('Product prices updated successfully!', 'success');
    }
}

function viewOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        alert(`Order Details:\n\nOrder ID: ${order.id}\nCustomer: ${order.customerName}\nPhone: ${order.customerPhone}\nEmail: ${order.customerEmail || 'N/A'}\nAddress: ${order.deliveryAddress}\nNotes: ${order.deliveryNotes || 'N/A'}\n\nItems:\n${order.items.map(item => `${item.name} (${item.quantity}g) x ${item.cartQuantity} = ₹${item.price * item.cartQuantity}`).join('\n')}\n\nTotal: ₹${order.total}`);
    }
}

function generateInvoice(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        // Create invoice HTML
        const invoiceHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #228B22;">Slicezee</h1>
                    <p>Fresh Chopped Vegetables</p>
                    <p>Chennai, Tamil Nadu</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h2>Invoice #${order.id}</h2>
                    <p><strong>Date:</strong> ${new Date(order.orderDate).toLocaleDateString()}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h3>Customer Details:</h3>
                    <p><strong>Name:</strong> ${order.customerName}</p>
                    <p><strong>Phone:</strong> ${order.customerPhone}</p>
                    <p><strong>Email:</strong> ${order.customerEmail || 'N/A'}</p>
                    <p><strong>Address:</strong> ${order.deliveryAddress}</p>
                </div>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <thead>
                        <tr style="background-color: #f0f0f0;">
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Item</th>
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">Qty</th>
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Price</th>
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${order.items.map(item => `
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px;">${item.name} (${item.quantity}g)</td>
                                <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${item.cartQuantity}</td>
                                <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">₹${item.price}</td>
                                <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">₹${item.price * item.cartQuantity}</td>
                            </tr>
                        `).join('')}
                        <tr style="font-weight: bold; background-color: #f0f0f0;">
                            <td colspan="3" style="border: 1px solid #ddd; padding: 8px; text-align: right;">Total:</td>
                            <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">₹${order.total}</td>
                        </tr>
                    </tbody>
                </table>
                
                <div style="text-align: center; margin-top: 30px;">
                    <p>Thank you for choosing Slicezee!</p>
                    <p>For any queries, contact us at info@slicezee.com</p>
                </div>
            </div>
        `;
        
        // Open invoice in new window for printing
        const invoiceWindow = window.open('', '_blank');
        invoiceWindow.document.write(invoiceHTML);
        invoiceWindow.document.close();
        invoiceWindow.print();
    }
}

// POS Functions
function addToPOS(productId, quantity, price) {
    const product = products[productId];
    if (!product) return;

    const existingItem = posCart.find(item => 
        item.productId === productId && item.quantity === quantity
    );

    if (existingItem) {
        existingItem.cartQuantity += 1;
    } else {
        posCart.push({
            productId: productId,
            quantity: quantity,
            price: price,
            cartQuantity: 1,
            name: product.name,
            tamil_name: product.tamil_name
        });
    }

    updatePOSCart();
}

function updatePOSCart() {
    const posCartItems = document.getElementById('posCartItems');
    const posTotal = document.getElementById('posTotal');

    if (posCartItems) {
        posCartItems.innerHTML = posCart.map((item, index) => `
            <div class="pos-cart-item">
                <div>
                    <strong>${item.name}</strong>
                    <small>${item.quantity}g × ${item.cartQuantity}</small>
                </div>
                <div>
                    <span>₹${item.price * item.cartQuantity}</span>
                    <button onclick="removePOSItem(${index})" style="margin-left: 10px; background: #dc2626; color: white; border: none; border-radius: 3px; padding: 2px 6px;">×</button>
                </div>
            </div>
        `).join('');
    }

    const total = posCart.reduce((sum, item) => sum + (item.price * item.cartQuantity), 0);
    if (posTotal) posTotal.textContent = total;
}

function removePOSItem(index) {
    posCart.splice(index, 1);
    updatePOSCart();
}

function clearPOSCart() {
    posCart = [];
    updatePOSCart();
}

function completePOSSale() {
    if (posCart.length === 0) {
        showMessage('No items in POS cart!', 'error');
        return;
    }

    const customerName = prompt('Enter customer name:') || 'Walk-in Customer';
    const customerPhone = prompt('Enter customer phone:') || 'N/A';

    const orderData = {
        id: 'POS' + Date.now(),
        customerName: customerName,
        customerPhone: customerPhone,
        customerEmail: '',
        deliveryAddress: 'Store Pickup',
        deliveryNotes: 'POS Sale',
        items: [...posCart],
        total: posCart.reduce((sum, item) => sum + (item.price * item.cartQuantity), 0),
        status: 'delivered',
        orderDate: new Date().toISOString(),
        deliveryDate: new Date().toISOString()
    };

    orders.push(orderData);
    saveOrders();

    // Generate and print receipt
    generatePOSReceipt(orderData);

    // Clear POS cart
    clearPOSCart();

    showMessage('Sale completed successfully!', 'success');
    updateAdminStats();
}

function generatePOSReceipt(order) {
    const receiptHTML = `
        <div style="font-family: monospace; width: 300px; margin: 0 auto; padding: 10px; font-size: 12px;">
            <div style="text-align: center; margin-bottom: 10px;">
                <strong>SLICEZEE</strong><br>
                Fresh Chopped Vegetables<br>
                Chennai, Tamil Nadu<br>
                Phone: +91 98765 43210
            </div>
            
            <div style="border-top: 1px dashed #000; margin: 10px 0; padding-top: 10px;">
                Receipt: ${order.id}<br>
                Date: ${new Date(order.orderDate).toLocaleString()}<br>
                Customer: ${order.customerName}
            </div>
            
            <div style="border-top: 1px dashed #000; margin: 10px 0; padding-top: 10px;">
                ${order.items.map(item => `
                    ${item.name}<br>
                    ${item.quantity}g × ${item.cartQuantity} @ ₹${item.price} = ₹${item.price * item.cartQuantity}
                `).join('<br>')}
            </div>
            
            <div style="border-top: 1px dashed #000; margin: 10px 0; padding-top: 10px;">
                <strong>TOTAL: ₹${order.total}</strong>
            </div>
            
            <div style="text-align: center; margin-top: 10px; font-size: 10px;">
                Thank you for choosing Slicezee!<br>
                Fresh vegetables, delivered fresh!
            </div>
        </div>
    `;
    
    const receiptWindow = window.open('', '_blank');
    receiptWindow.document.write(receiptHTML);
    receiptWindow.document.close();
    receiptWindow.print();
    receiptWindow.close();
}

// Contact Form
function handleContactForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const message = document.getElementById('contactMessage').value;

    // Simulate form submission
    showMessage('Thank you for your message! We will get back to you soon.', 'success');
    
    // Reset form
    document.getElementById('contactForm').reset();
}

// Utility Functions
function showMessage(message, type = 'success') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.right = '20px';
    messageDiv.style.zIndex = '9999';
    messageDiv.style.padding = '1rem';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

function saveOrders() {
    localStorage.setItem('slicezee_orders', JSON.stringify(orders));
}

function loadOrders() {
    const savedOrders = localStorage.getItem('slicezee_orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    }
}

// Sample data for testing
function loadSampleData() {
    if (orders.length === 0) {
        orders = [
            {
                id: 'ORD1640000001',
                customerName: 'Rajesh Kumar',
                customerPhone: '+91 98765 43210',
                customerEmail: 'rajesh@example.com',
                deliveryAddress: '123 Anna Nagar, Chennai - 600040',
                deliveryNotes: 'Call before delivery',
                items: [
                    { productId: 'cv13', name: 'Carrot', quantity: 500, price: 22, cartQuantity: 1 },
                    { productId: 'lg3', name: 'Coriander Leaves', quantity: 250, price: 20, cartQuantity: 2 }
                ],
                total: 62,
                status: 'pending',
                orderDate: new Date().toISOString(),
                deliveryDate: getNextDeliveryDate()
            },
            {
                id: 'ORD1640000002',
                customerName: 'Priya Sharma',
                customerPhone: '+91 87654 32109',
                customerEmail: 'priya@example.com',
                deliveryAddress: '456 T Nagar, Chennai - 600017',
                deliveryNotes: '',
                items: [
                    { productId: 'cv11', name: 'Cabbage', quantity: 250, price: 10, cartQuantity: 1 },
                    { productId: 'pv2', name: 'Garlic', quantity: 250, price: 38, cartQuantity: 1 }
                ],
                total: 48,
                status: 'accepted',
                orderDate: new Date(Date.now() - 86400000).toISOString(),
                deliveryDate: new Date().toISOString()
            }
        ];
        saveOrders();
    }
}

// Load sample data on first visit
setTimeout(loadSampleData, 1000);
