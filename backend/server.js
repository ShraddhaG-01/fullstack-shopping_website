const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ---------- CORS FIX ---------- */

app.use(
  cors({
    origin: "*",
  })
);

/* ---------- BODY PARSER ---------- */

app.use(express.json());

/* ---------- ROUTES ---------- */

const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

/* ---------- HOME ---------- */

app.get("/", (req, res) => {
  res.send("Shopping Backend Running 🚀");
});

/* ---------- DATABASE ---------- */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* ---------- SERVER ---------- */

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});