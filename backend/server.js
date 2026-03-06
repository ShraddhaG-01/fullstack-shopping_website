const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ---------------- CORS ---------------- */

app.use(
  cors({
    origin: "*",
  })
);

/* -------------------------------------- */

app.use(express.json());

/* -------- ROUTES -------- */

const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/Cart");

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

/* -------- HOME ROUTE -------- */

app.get("/", (req, res) => {
  res.send("Shopping Website Backend Running 🚀");
});

/* -------- DATABASE -------- */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* -------- SERVER -------- */

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});