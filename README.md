[README.md](https://github.com/user-attachments/files/31858770/README.md)
# ShopX – MERN Stack E-Commerce Application

ShopX is a full-stack e-commerce web application built using the **MERN stack** — **MongoDB, Express.js, React.js, and Node.js**.

The application provides a simple shopping experience where users can view products, add products to their cart, register/login, and manage their shopping cart.

## 🚀 Features

### User Features
- User registration
- User login
- Authentication using JWT
- Password hashing using bcrypt
- Browse all available products
- Search products
- Add products to cart
- View cart items
- Remove products from cart
- Automatically calculate cart total
- Responsive and user-friendly interface

### Product Features
- Product name
- Product price
- Product description
- Product image
- Products stored in MongoDB
- Products retrieved through REST APIs

### Backend Features
- RESTful API using Express.js
- MongoDB database integration using Mongoose
- User authentication and authorization
- JWT-based protected routes
- Password encryption/hashing with bcrypt
- Middleware for authentication
- CRUD operations for products

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Tailwind CSS / Bootstrap (if configured in the project)

### Backend
- Node.js
- Express.js
- REST API
- JWT (JSON Web Token)
- bcrypt / bcryptjs
- Mongoose

### Database
- MongoDB
- MongoDB Atlas or Local MongoDB

### Development Tools
- VS Code
- Thunder Client / Postman
- npm
- Git & GitHub

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
│   │
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── productRoutes.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
└── README.md
```

> The exact folder and file names may differ depending on your implementation.

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

## 🗄️ MongoDB Database

MongoDB is used to store application data.

Typical collections include:

### Users

```text
users
├── name
├── email
├── password
└── role
```

### Products

```text
products
├── name
├── price
├── description
└── image
```

MongoDB provides a flexible NoSQL database structure and Mongoose is used to define schemas and interact with the database from Node.js.

## 🔐 Authentication

The application uses JWT-based authentication.

### Registration

```text
User enters:
Name + Email + Password
        ↓
React Frontend
        ↓
POST /api/users/register
        ↓
Express Server
        ↓
Password hashed using bcrypt
        ↓
User stored in MongoDB
```

### Login

```text
Email + Password
        ↓
POST /api/users/login
        ↓
Password verification
        ↓
JWT token generated
        ↓
Token used for protected requests
```

## 🛒 Shopping Cart

The cart allows users to:

1. Select a product.
2. Click **Add to Cart**.
3. View products in the cart.
4. Remove unwanted products.
5. Calculate the total price automatically.

Example:

```text
Laptop        ₹50,000
Mobile Phone  ₹20,000
Mobile Phone  ₹20,000
----------------------
Total         ₹90,000
```

## 🔌 Example API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Login user |

### Products

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Add a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

> Update the endpoint names above if your actual backend routes use different paths.

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd ShopX
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

**Do not upload your `.env` file to GitHub.**

Add this to `.gitignore`:

```text
.env
node_modules/
```

### 5. Start the Backend

```bash
cd backend
npm start
```

Or, if nodemon is configured:

```bash
npm run dev
```

The backend will run on something similar to:

```text
http://localhost:5000
```

### 6. Start the Frontend

```bash
cd frontend
npm start
```

Or for a Vite-based React project:

```bash
npm run dev
```

The frontend will run on the URL shown in the terminal, commonly:

```text
http://localhost:5173
```

## 🖥️ Application Screens

### All Products

The products page displays available products with their images, prices, descriptions, and **Add to Cart** buttons.

### Shopping Cart

The cart page displays selected products, their prices, remove buttons, and the total amount.

### Registration

The registration page allows new users to create an account using their name, email address, and password.

## 📸 Screenshots

### Products Page

Add your screenshot here:

```markdown
![ShopX Products](screenshots/dashboard.png)
```

### Cart Page

```markdown
![ShopX Cart](screenshots/cart.png)
```

### Registration Page

```markdown
![ShopX Register](screenshots/register.png)
```

Create a `screenshots` folder in the project and place your images inside it.

## 🧪 API Testing

Backend APIs can be tested using:

- Thunder Client
- Postman

Example:

```http
GET http://localhost:5000/api/products
```

For protected APIs, send the JWT token in the request headers:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

## 🔒 Security

The project includes basic security practices such as:

- Password hashing with bcrypt
- JWT authentication
- Protected backend routes
- Environment variables for sensitive configuration
- Authentication middleware

## ☁️ Deployment

The application can be deployed using services such as:

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

Make sure to configure environment variables on the deployment platforms.

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Building a full-stack MERN application
- Creating REST APIs
- Connecting React with an Express/Node.js backend
- Working with MongoDB and Mongoose
- User authentication and authorization
- JWT-based authentication
- Password hashing
- CRUD operations
- API testing
- Frontend-backend integration
- Deployment of full-stack applications

## 🔮 Future Improvements

Some features that can be added in the future:

- Product categories and filters
- Product details page
- Quantity management in cart
- Wishlist
- Order placement
- Payment gateway integration
- Order history
- Admin dashboard
- Product reviews and ratings
- Pagination
- Improved responsive design

## 👩‍💻 Author

**Shraddha**

Computer Engineering Student | MERN Stack | Java | Python | AI/ML

---

⭐ If you found this project useful, consider giving the repository a star!
