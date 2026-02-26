const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
    secret: "ecommerceSecret",
    resave: false,
    saveUninitialized: false
}));

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// ================= USERS =================
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const User = mongoose.model("User", userSchema);

// ================= PRODUCTS =================
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String
});
const Product = mongoose.model("Product", productSchema);

// Seed Products (only once)
app.get("/seed", async (req, res) => {
    await Product.deleteMany();

    await Product.insertMany([
        { name: "T-Shirt", price: 799, image: "https://via.placeholder.com/150" },
        { name: "Shoes", price: 2499, image: "https://via.placeholder.com/150" },
        { name: "Watch", price: 1999, image: "https://via.placeholder.com/150" }
    ]);

    res.send("Products Added");
});

// ================= REGISTER =================
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.send("Email already exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        email,
        password: hashedPassword
    });

    await newUser.save();
    res.redirect("/");
});

// ================= LOGIN =================
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.send("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.send("Wrong password");

    req.session.userId = user._id;
    res.redirect("/shop");
});

// ================= SHOP =================
app.get("/shop", async (req, res) => {
    const products = await Product.find();

    let productHTML = products.map(p => `
        <div class="card">
            <img src="${p.image}" />
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <a href="/add-to-cart/${p._id}">Add to Cart</a>
        </div>
    `).join("");

    res.send(`
        <h1>Mini Store 🛍️</h1>
        <a href="/cart">View Cart</a> |
        <a href="/logout">Logout</a>
        <div class="container">${productHTML}</div>

        <style>
            body { font-family: Arial; text-align: center; }
            .container { display: flex; justify-content: center; gap: 20px; }
            .card { border: 1px solid #ddd; padding: 15px; width: 200px; }
            img { width: 100%; }
            a { display: block; margin-top: 10px; text-decoration: none; color: blue; }
        </style>
    `);
});

// ================= CART =================
app.get("/add-to-cart/:id", (req, res) => {
    if (!req.session.cart) req.session.cart = [];

    req.session.cart.push(req.params.id);
    res.redirect("/shop");
});

app.get("/cart", async (req, res) => {
    if (!req.session.cart || req.session.cart.length === 0)
        return res.send("Cart is empty <br><a href='/shop'>Back</a>");

    const products = await Product.find({ _id: { $in: req.session.cart } });

    let total = 0;
    let items = products.map(p => {
        total += p.price;
        return `<p>${p.name} - ₹${p.price}</p>`;
    }).join("");

    res.send(`
        <h1>Your Cart 🛒</h1>
        ${items}
        <h3>Total: ₹${total}</h3>
        <a href="/shop">Back to Shop</a>
    `);
});

// ================= LOGOUT =================
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

// ================= HOME =================
app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to Mini Ecommerce</h1>

        <h2>Login</h2>
        <form method="POST" action="/login">
            <input name="email" placeholder="Email" required><br><br>
            <input name="password" type="password" placeholder="Password" required><br><br>
            <button>Login</button>
        </form>

        <h2>Register</h2>
        <form method="POST" action="/register">
            <input name="name" placeholder="Name" required><br><br>
            <input name="email" placeholder="Email" required><br><br>
            <input name="password" type="password" placeholder="Password" required><br><br>
            <button>Register</button>
        </form>
    `);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
