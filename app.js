// Application Data
const appData = {
  "categories": [
    {"id": 1, "name": "Fresh Vegetables", "icon": "🥕", "count": 45},
    {"id": 2, "name": "Leafy Greens", "icon": "🥬", "count": 12},
    {"id": 3, "name": "Organic", "icon": "🌱", "count": 28},
    {"id": 4, "name": "Herbs & Spices", "icon": "🌿", "count": 15},
    {"id": 5, "name": "Fruits", "icon": "🍎", "count": 32},
    {"id": 6, "name": "Exotic Vegetables", "icon": "🍆", "count": 18}
  ],
  "products": [
    {"id": 1, "name": "Fresh Tomatoes", "category": "Fresh Vegetables", "price": 3.99, "originalPrice": 4.99, "image": "🍅", "unit": "per kg", "description": "Premium quality fresh tomatoes", "inStock": true, "rating": 4.5, "discount": "20% OFF"},
    {"id": 2, "name": "Red Onions", "category": "Fresh Vegetables", "price": 2.49, "image": "🧅", "unit": "per kg", "description": "Fresh red onions, perfect for cooking", "inStock": true, "rating": 4.3},
    {"id": 3, "name": "Green Bell Peppers", "category": "Fresh Vegetables", "price": 5.99, "image": "🫑", "unit": "per kg", "description": "Crisp green bell peppers", "inStock": true, "rating": 4.7},
    {"id": 4, "name": "Fresh Spinach", "category": "Leafy Greens", "price": 2.99, "image": "🥬", "unit": "per bunch", "description": "Fresh organic spinach leaves", "inStock": true, "rating": 4.6},
    {"id": 5, "name": "Carrots", "category": "Fresh Vegetables", "price": 1.99, "image": "🥕", "unit": "per kg", "description": "Sweet and crunchy carrots", "inStock": true, "rating": 4.4},
    {"id": 6, "name": "Broccoli", "category": "Fresh Vegetables", "price": 4.99, "originalPrice": 5.99, "image": "🥦", "unit": "per head", "description": "Fresh broccoli crowns", "inStock": true, "rating": 4.5, "discount": "17% OFF"},
    {"id": 7, "name": "Potatoes", "category": "Fresh Vegetables", "price": 1.49, "image": "🥔", "unit": "per kg", "description": "Fresh potatoes for all your cooking needs", "inStock": true, "rating": 4.2},
    {"id": 8, "name": "Lettuce", "category": "Leafy Greens", "price": 2.49, "image": "🥬", "unit": "per head", "description": "Crisp iceberg lettuce", "inStock": true, "rating": 4.3},
    {"id": 9, "name": "Cucumber", "category": "Fresh Vegetables", "price": 2.99, "image": "🥒", "unit": "per kg", "description": "Fresh cucumbers, perfect for salads", "inStock": true, "rating": 4.4},
    {"id": 10, "name": "Eggplant", "category": "Fresh Vegetables", "price": 3.99, "image": "🍆", "unit": "per kg", "description": "Purple eggplants, great for curries", "inStock": true, "rating": 4.1},
    {"id": 11, "name": "Cauliflower", "category": "Fresh Vegetables", "price": 3.49, "image": "🥬", "unit": "per head", "description": "Fresh white cauliflower", "inStock": true, "rating": 4.5},
    {"id": 12, "name": "Organic Kale", "category": "Organic", "price": 4.99, "image": "🥬", "unit": "per bunch", "description": "Organic kale leaves, superfood", "inStock": true, "rating": 4.8}
  ],
  "testimonials": [
    {"id": 1, "name": "Sarah Johnson", "rating": 5, "comment": "Amazing quality vegetables delivered super fast! Love the freshness.", "location": "New York"},
    {"id": 2, "name": "Mike Chen", "rating": 5, "comment": "Slicezee has become my go-to for all fresh vegetables. Excellent service!", "location": "San Francisco"},
    {"id": 3, "name": "Emma Wilson", "rating": 4, "comment": "Great selection and prices. Delivery is always on time.", "location": "Chicago"}
  ],
  "benefits": [
    {"title": "Farm Fresh Quality", "description": "Direct from farms to your doorstep within hours", "icon": "🌱"},
    {"title": "Lightning Fast Delivery", "description": "Get your vegetables delivered in just 10-15 minutes", "icon": "⚡"},
    {"title": "Best Prices", "description": "Competitive prices with regular discounts and offers", "icon": "💰"},
    {"title": "Wide Selection", "description": "Over 100+ varieties of fresh vegetables and fruits", "icon": "🛒"}
  ],
  "stats": [
    {"label": "Happy Customers", "value": "50,000+"},
    {"label": "Products Available", "value": "500+"},
    {"label": "Cities Served", "value": "25+"},
    {"label": "Average Delivery Time", "value": "12 mins"}
  ]
};

// Application State
let currentPage = 'home';
let cart = [];
let currentCategory = '';
let currentSort = 'name';
let searchTerm = '';

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize Application
function initializeApp() {
  loadCategories();
  loadPopularProducts();
  loadBenefits();
  loadStats();
  loadTestimonials();
  loadShopProducts();
  loadCategoryFilter();
  updateCartCount();
  setupEventListeners();
}

// Event Listeners Setup
function setupEventListeners() {
  // Search functionality
  const searchInputs = document.querySelectorAll('#searchInput, .hero-search input');
  searchInputs.forEach(input => {
    input.addEventListener('input', handleSearch);
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handleSearchSubmit();
      }
    });
  });
  
  // Hero search button
  const heroSearchBtn = document.querySelector('.hero-search .btn');
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', handleSearchSubmit);
  }
  
  // Category and sort filters
  const categoryFilter = document.getElementById('categoryFilter');
  const sortSelect = document.getElementById('sortSelect');
  
  if (categoryFilter) {
    categoryFilter.addEventListener('change', handleCategoryFilter);
  }
  
  if (sortSelect) {
    sortSelect.addEventListener('change', handleSort);
  }
  
  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }
  
  // Profile form
  const profileForm = document.querySelector('.profile-form');
  if (profileForm) {
    profileForm.addEventListener('submit', handleProfileUpdate);
  }
}

// Navigation Functions
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
    page.classList.remove('active');
  });
  
  // Show selected page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.remove('hidden');
    targetPage.classList.add('active');
  }
  
  // Update navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Set active nav link
  const activeLinks = document.querySelectorAll(`[onclick="showPage('${pageId}')"]`);
  activeLinks.forEach(link => {
    if (link.classList.contains('nav-link')) {
      link.classList.add('active');
    }
  });
  
  currentPage = pageId;
  
  // Close mobile menu if open
  const mobileNav = document.getElementById('mobileNav');
  if (mobileNav && !mobileNav.classList.contains('hidden')) {
    toggleMobileMenu();
  }
  
  // Load page specific content
  if (pageId === 'cart') {
    loadCartPage();
  } else if (pageId === 'account') {
    loadAccountFavorites();
  }
  
  // Scroll to top
  window.scrollTo(0, 0);
}

function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  const menuBtn = document.querySelector('.mobile-menu-btn i');
  
  if (mobileNav.classList.contains('hidden')) {
    mobileNav.classList.remove('hidden');
    menuBtn.classList.remove('fa-bars');
    menuBtn.classList.add('fa-times');
  } else {
    mobileNav.classList.add('hidden');
    menuBtn.classList.remove('fa-times');
    menuBtn.classList.add('fa-bars');
  }
}

// Content Loading Functions
function loadCategories() {
  const container = document.getElementById('categoriesGrid');
  if (!container) return;
  
  container.innerHTML = appData.categories.map(category => `
    <div class="category-card" onclick="filterByCategory('${category.name}')">
      <span class="category-icon">${category.icon}</span>
      <h3>${category.name}</h3>
      <p class="category-count">${category.count} items</p>
    </div>
  `).join('');
}

function loadPopularProducts() {
  const container = document.getElementById('popularProducts');
  if (!container) return;
  
  const popularProducts = appData.products.slice(0, 6);
  container.innerHTML = popularProducts.map(product => createProductCard(product)).join('');
}

function loadShopProducts() {
  const container = document.getElementById('shopProducts');
  if (!container) return;
  
  let filteredProducts = appData.products;
  
  // Apply category filter
  if (currentCategory) {
    filteredProducts = filteredProducts.filter(product => 
      product.category === currentCategory
    );
  }
  
  // Apply search filter
  if (searchTerm) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  // Apply sorting
  filteredProducts = sortProducts(filteredProducts, currentSort);
  
  container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

function loadCategoryFilter() {
  const select = document.getElementById('categoryFilter');
  if (!select) return;
  
  const categories = [...new Set(appData.products.map(p => p.category))];
  const options = categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
  select.innerHTML = `<option value="">All Categories</option>${options}`;
}

function loadBenefits() {
  const containers = document.querySelectorAll('#benefitsGrid, #whyBenefitsGrid');
  
  containers.forEach(container => {
    if (container) {
      container.innerHTML = appData.benefits.map(benefit => `
        <div class="benefit-card">
          <span class="benefit-icon">${benefit.icon}</span>
          <h3>${benefit.title}</h3>
          <p>${benefit.description}</p>
        </div>
      `).join('');
    }
  });
}

function loadStats() {
  const containers = document.querySelectorAll('#statsGrid, #whyStatsGrid');
  
  containers.forEach(container => {
    if (container) {
      container.innerHTML = appData.stats.map(stat => `
        <div class="stat-item">
          <div class="stat-value">${stat.value}</div>
          <div class="stat-label">${stat.label}</div>
        </div>
      `).join('');
    }
  });
}

function loadTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;
  
  container.innerHTML = appData.testimonials.map(testimonial => `
    <div class="testimonial-card">
      <div class="testimonial-rating">
        ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
      </div>
      <p class="testimonial-comment">"${testimonial.comment}"</p>
      <div class="testimonial-author">${testimonial.name}</div>
      <div class="testimonial-location">${testimonial.location}</div>
    </div>
  `).join('');
}

// Product Functions
function createProductCard(product) {
  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  
  return `
    <div class="product-card">
      <div class="product-image">
        ${product.discount ? `<span class="discount-badge">${product.discount}</span>` : ''}
        <span class="product-emoji">${product.image}</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
          <span>(${product.rating})</span>
        </div>
        <div class="product-price">
          <span class="current-price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
          <span class="product-unit">${product.unit}</span>
        </div>
        <div class="product-actions">
          <div class="quantity-selector">
            <button class="quantity-btn" onclick="changeQuantity(${product.id}, -1)">-</button>
            <input type="text" class="quantity-input" value="${quantity}" readonly>
            <button class="quantity-btn" onclick="changeQuantity(${product.id}, 1)">+</button>
          </div>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

function sortProducts(products, sortType) {
  const sorted = [...products];
  
  switch (sortType) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'name':
    default:
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
}

// Cart Functions
function addToCart(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      unit: product.unit,
      quantity: 1
    });
  }
  
  updateCartCount();
  showToast(`${product.name} added to cart!`);
  
  // Update product card display
  if (currentPage === 'shop' || currentPage === 'home') {
    loadShopProducts();
    if (currentPage === 'home') {
      loadPopularProducts();
    }
  }
}

function changeQuantity(productId, change) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (change > 0) {
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        unit: product.unit,
        quantity: 1
      });
    }
  } else if (change < 0 && existingItem) {
    existingItem.quantity -= 1;
    if (existingItem.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
  }
  
  updateCartCount();
  
  // Update displays
  if (currentPage === 'cart') {
    loadCartPage();
  }
  if (currentPage === 'shop' || currentPage === 'home') {
    loadShopProducts();
    if (currentPage === 'home') {
      loadPopularProducts();
    }
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartCount();
  
  if (currentPage === 'cart') {
    loadCartPage();
  }
  if (currentPage === 'shop' || currentPage === 'home') {
    loadShopProducts();
    if (currentPage === 'home') {
      loadPopularProducts();
    }
  }
  
  showToast('Item removed from cart');
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) {
    cartCountElement.textContent = totalItems;
  }
}

function loadCartPage() {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartSummaryContainer = document.getElementById('cartSummary');
  const emptyCartContainer = document.getElementById('emptyCart');
  
  if (cart.length === 0) {
    cartItemsContainer.style.display = 'none';
    cartSummaryContainer.style.display = 'none';
    emptyCartContainer.classList.remove('hidden');
    return;
  }
  
  cartItemsContainer.style.display = 'block';
  cartSummaryContainer.style.display = 'block';
  emptyCartContainer.classList.add('hidden');
  
  // Load cart items
  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">${item.image}</div>
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p class="cart-item-price">$${item.price.toFixed(2)} ${item.unit}</p>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-selector">
          <button class="quantity-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
          <input type="text" class="quantity-input" value="${item.quantity}" readonly>
          <button class="quantity-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    </div>
  `).join('');
  
  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 25 ? 0 : 2.99;
  const total = subtotal + deliveryFee;
  
  // Load cart summary
  cartSummaryContainer.innerHTML = `
    <h2>Order Summary</h2>
    <div class="summary-row">
      <span>Subtotal</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>
    <div class="summary-row">
      <span>Delivery Fee</span>
      <span>${deliveryFee === 0 ? 'FREE' : '$' + deliveryFee.toFixed(2)}</span>
    </div>
    <div class="summary-row total">
      <span>Total</span>
      <span>$${total.toFixed(2)}</span>
    </div>
    <button class="btn btn--primary btn--full-width" onclick="proceedToCheckout()">
      Proceed to Checkout
    </button>
    ${subtotal < 25 ? '<p style="font-size: 0.8rem; color: var(--color-text-secondary); margin-top: 8px;">Free delivery on orders over $25</p>' : ''}
  `;
}

function proceedToCheckout() {
  showToast('Checkout functionality would be implemented here!');
}

// Filter and Search Functions
function filterByCategory(categoryName) {
  currentCategory = categoryName;
  showPage('shop');
  
  // Update category filter select
  const categoryFilter = document.getElementById('categoryFilter');
  if (categoryFilter) {
    categoryFilter.value = categoryName;
  }
  
  loadShopProducts();
}

function handleCategoryFilter(event) {
  currentCategory = event.target.value;
  loadShopProducts();
}

function handleSort(event) {
  currentSort = event.target.value;
  loadShopProducts();
}

function handleSearch(event) {
  searchTerm = event.target.value;
  if (currentPage === 'shop') {
    loadShopProducts();
  }
}

function handleSearchSubmit() {
  if (searchTerm.trim()) {
    showPage('shop');
    loadShopProducts();
  }
}

// Account Functions
function showAccountSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.account-section').forEach(section => {
    section.classList.add('hidden');
    section.classList.remove('active');
  });
  
  // Show selected section
  const targetSection = document.getElementById(`${sectionId}-section`);
  if (targetSection) {
    targetSection.classList.remove('hidden');
    targetSection.classList.add('active');
  }
  
  // Update navigation
  document.querySelectorAll('.account-nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  const activeLink = document.querySelector(`[onclick="showAccountSection('${sectionId}')"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

function loadAccountFavorites() {
  const container = document.getElementById('favoritesGrid');
  if (!container) return;
  
  // Show first 4 products as favorites for demo
  const favoriteProducts = appData.products.slice(0, 4);
  container.innerHTML = favoriteProducts.map(product => `
    <div class="product-card">
      <div class="product-image">
        <span class="product-emoji">${product.image}</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="product-price">
          <span class="current-price">$${product.price.toFixed(2)}</span>
          <span class="product-unit">${product.unit}</span>
        </div>
        <button class="btn btn--primary btn--sm btn--full-width" onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

// Form Handlers
function handleContactForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  // Simulate form submission
  showToast('Message sent successfully! We\'ll get back to you soon.');
  event.target.reset();
}

function handleProfileUpdate(event) {
  event.preventDefault();
  showToast('Profile updated successfully!');
}

// Utility Functions
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  
  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  }
}