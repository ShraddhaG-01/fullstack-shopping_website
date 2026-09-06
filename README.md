# ShopX – MERN Stack E-Commerce Application

ShopX is a full-stack e-commerce web application built using the **MERN stack** — **MongoDB, Express.js, React.js, and Node.js**.

The application provides a seamless shopping experience where users can browse products, search items, manage their cart, register/login, and calculate total pricing in real time.

---

## 🚀 Features

### User Features
- User registration & authentication using JWT
- Secure password hashing using bcrypt
- Browse all available products
- Search products dynamically
- Add products to cart
- View cart items with instant total calculation
- Remove products from cart
- Clean, responsive, and user-friendly interface

### Product Features
- Product details: Name, Price, Description, Image
- Persistent storage in MongoDB
- RESTful API consumption for real-time catalog updates

### Backend Features
- RESTful API built with Express.js & Node.js
- MongoDB database integration using Mongoose schemas
- User authentication and authorization with JWT
- Protected routes using custom auth middleware
- Secure password encryption with bcrypt
- CRUD operations for products and user management

---

## 📸 Screenshots

### Products Page
![ShopX Products](screenshots/dashboard.png)

### Cart Page
![ShopX Cart](screenshots/cart.png)

### Registration Page
![ShopX Register](screenshots/register.png)

---

## 🛠️ Technologies Used

### Frontend
- **React.js**
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **Tailwind CSS / Bootstrap**

### Backend
- **Node.js**
- **Express.js**
- **JSON Web Token (JWT)**
- **bcrypt / bcryptjs**
- **Mongoose ODM**

### Database
- **MongoDB** (Atlas / Local)

### Development Tools
- **VS Code**
- **Postman / Thunder Client**
- **npm**
- **Git & GitHub**

---

## 📂 Project Structure

```text
ShopX/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── productRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
├── screenshots/
│   ├── dashboard.png
│   ├── cart.png
│   └── register.png
│
└── README.md
```

---

## 🔄 Application Flow

```text
User
  │
  ▼
React Frontend
  │
  ▼
Express.js REST API
  │
  ├── Authentication
  │      ├── Register
  │      └── Login
  │
  ├── Product APIs
  │      ├── Get Products
  │      ├── Add Product
  │      ├── Update Product
  │      └── Delete Product
  │
  └── Cart Operations
         │
         ▼
      MongoDB
```

---

## 🗄️ MongoDB Database

### Users Collection
```text
users
├── name
├── email
├── password
└── role
```

### Products Collection
```text
products
├── name
├── price
├── description
└── image
```

---

## 🔐 Authentication

### Registration Flow
```text
User enters: Name + Email + Password
        ↓
React Frontend
        ↓
POST /api/users/register
        ↓
Express Server (Password hashed using bcrypt)
        ↓
User stored in MongoDB
```

### Login Flow
```text
User enters: Email + Password
        ↓
POST /api/users/login
        ↓
Password verification (bcrypt compare)
        ↓
JWT token generated & returned
        ↓
Token stored & attached to protected requests
```

---

## 🛒 Shopping Cart

The cart allows users to:
1. Browse products and click **Add to Cart**.
2. View all selected items in the cart view.
3. Remove items with immediate total recalculation.
4. Preview order summaries in Indian Rupees (₹).

**Example Cart Calculation:**
```text
Laptop            ₹50,000
Mobile Phone      ₹20,000
Mobile Phone      ₹20,000
-------------------------
Total             ₹90,000
```

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Login user & return JWT |

### Products
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Add a new product |
| PUT | `/api/products/:id` | Update product details |
| DELETE | `/api/products/:id` | Remove a product |

---

## ⚙️ Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/ShopX.git
cd ShopX
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### 4. Configure Environment Variables
Create a `.env` file inside the `backend/` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

> ⚠️ **Note:** Ensure `.env` is listed in your `.gitignore` file to prevent exposing sensitive keys.

### 5. Start the Application

**Run Backend:**
```bash
cd backend
npm start
# or with nodemon:
npm run dev
```

**Run Frontend:**
```bash
cd frontend
npm run dev
```

Default URLs:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

---

## 🧪 API Testing

Backend APIs can be tested using **Thunder Client** or **Postman**.

For protected endpoints, include the JWT token in the Authorization header:
```text
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 🔒 Security Practices
- Password hashing using `bcrypt` / `bcryptjs`
- Stateless token-based authentication via `JWT`
- Middleware guards for protected routes
- Centralized environment variable management

---

## ☁️ Deployment
- **Frontend:** Vercel / Netlify
- **Backend:** Render / Railway
- **Database:** MongoDB Atlas

---

## 🎯 Learning Outcomes
- Building an end-to-end full-stack MERN application
- Implementing RESTful API architecture
- Secure authentication & authorization with JWT and bcrypt
- State management and dynamic UI updates in React
- Managing MongoDB collections and schemas with Mongoose

---

## 🔮 Future Improvements
- Product categories, tags, and price filtering
- Dedicated product details view
- Quantity adjustment directly inside the cart
- Wishlist functionality
- Payment gateway integration (Stripe / Razorpay)
- User order history and tracking
- Admin dashboard for product & order management
- Product ratings and reviews

---

## 👩‍💻 Author

**Shraddha**  
Computer Engineering Student | MERN Stack | Java | Python | AI/ML  

---

⭐ *If you found this project helpful, feel free to give this repository a star!*
