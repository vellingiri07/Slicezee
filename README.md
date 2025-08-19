# Slicezee - Fresh Chopped Vegetables E-commerce Website

A complete full-featured e-commerce website for selling fresh chopped vegetables with admin dashboard, order management, and POS system.

## 🚀 Features

### Customer Features
- Browse vegetables by categories (Chopped Vegetables, Peeled Vegetables, Leafy Greens)
- Independent pricing for 250g, 500g, and 1kg quantities
- Shopping cart with quantity management
- Order placement with customer details
- Responsive design for mobile and desktop
- Search functionality with English and Tamil names

### Business Policy
- **Order before 7 PM, delivery next day at 7 AM**
- **Zero wastage policy** - vegetables sourced only after order
- **Never frozen** - fresh vegetables only
- Three categories: Chopped Vegetables, Peeled Vegetables, Chopped Leafy Greens

### Admin Dashboard
- Order management with status updates (Pending → Accepted → Packed → Delivered)
- Customer information and order history
- Sales analytics (daily, weekly reports)
- Product price management
- Invoice generation and printing
- Point of Sale (POS) system with receipt printing
- Real-time notifications for order updates

### Products Included
**Chopped Vegetables:** Ash Gourd, Baby Corn, Baby Potato, Banana Flower, Beetroot, Bitter Gourd, Bottle Gourd, Brinjal, Cabbage, Capsicum, Carrot, Cauliflower, Tomato, and more.

**Peeled Vegetables:** Sambar Onion, Garlic, Ginger, Peeled Carrot, Peeled Potato

**Leafy Greens:** Amaranth Leaves, Coriander Leaves, Curry Leaves, Mint Leaves, Spinach, and more.

## 📁 File Structure

```
slicezee-website/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
├── logo.png           # Your logo file (add this)
└── README.md          # This file
```

## 🛠️ Setup Instructions

### Option 1: GitHub Pages (Recommended)

1. **Create a new GitHub repository**
   - Go to GitHub.com and create a new repository
   - Name it `slicezee-website` or any name you prefer
   - Make it public

2. **Upload the files**
   - Download all 4 files: `index.html`, `styles.css`, `script.js`, `README.md`
   - Add your `logo.png` file to the same folder
   - Upload all files to your GitHub repository

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll down to Pages section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)"
   - Save

4. **Access your website**
   - Your website will be available at: `https://yourusername.github.io/repository-name`
   - It may take a few minutes to deploy

### Option 2: Other Hosting Services

**Netlify:**
1. Drag and drop all files to Netlify Deploy
2. Your site will be live instantly

**Vercel:**
1. Connect your GitHub repository to Vercel
2. Deploy with default settings

## 🖥️ Usage

### For Customers
1. Browse products by category or search
2. Select quantity (250g, 500g, or 1kg) with different pricing
3. Add items to cart
4. Checkout with customer details
5. Receive order confirmation

### For Admin
1. Click "Admin" in navigation
2. View and manage orders
3. Update order status (Accept → Packed → Delivered)
4. Edit product prices
5. Use POS for walk-in customers
6. Generate invoices and receipts
7. View sales reports

## 🔧 Customization

### Adding Your Logo
- Replace `logo.png` with your actual logo file
- Keep the filename as `logo.png` or update the reference in `index.html`

### Updating Business Information
- Edit contact details in the Contact section of `index.html`
- Update business name, address, and phone numbers

### Modifying Products
- Edit the `productData` object in `script.js`
- Update product names, Tamil names, and prices
- Add or remove products as needed

### Changing Colors/Theme
- Modify CSS variables in `styles.css`
- Main brand color is `#228B22` (change this for different theme)

## 📱 Mobile Responsive

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern web browsers

## 💾 Data Storage

Currently uses browser localStorage for:
- Shopping cart data
- Order history
- Admin dashboard data

For production use, integrate with a backend database (PostgreSQL, MySQL, etc.)

## 🖨️ Printing Features

- **Invoices:** Generate and print customer invoices
- **POS Receipts:** Print receipts for walk-in customers
- **TVS Printer Compatible:** Optimized for thermal receipt printers

## 🎯 Next Steps for Production

1. **Backend Integration:**
   - Set up Node.js/Express server
   - Connect to PostgreSQL database
   - Implement user authentication
   - Add email/SMS notifications

2. **Payment Integration:**
   - Add payment gateway (Razorpay, Stripe)
   - Implement secure checkout

3. **Advanced Features:**
   - Order tracking
   - Customer accounts
   - Inventory management
   - Analytics dashboard

## 📞 Support

For any questions or customization needs, you can modify the code or seek help from web developers familiar with HTML/CSS/JavaScript.

## 🔒 Security Note

This is a frontend-only demo. For production use, implement proper backend security, user authentication, and data validation.

---

**Built for Slicezee - Fresh Chopped Vegetables Delivery**
*Order Today, Fresh Tomorrow!*