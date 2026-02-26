const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/shop")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));