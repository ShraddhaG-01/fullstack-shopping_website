const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const adminMiddleware = require("../middleware/adminMiddleware");

/* ===============================
   GET ALL PRODUCTS
================================= */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ===============================
   ADD PRODUCT (ADMIN ONLY)
================================= */
router.post("/add", adminMiddleware, async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    const product = new Product({
      name,
      price,
      description,
      image,
      createdBy: req.user.id,
    });

    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ===============================
   DELETE PRODUCT (ADMIN ONLY)
================================= */
router.delete("/:id", adminMiddleware, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ===============================
   ADD SAMPLE PRODUCTS (ADMIN ONLY)
================================= */
router.get("/add-sample", adminMiddleware, async (req, res) => {
  try {
    await Product.deleteMany();

    await Product.insertMany([
      {
        name: "Laptop",
        price: 50000,
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      },
      {
        name: "Mobile Phone",
        price: 20000,
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      },
      {
        name: "Headphones",
        price: 3000,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      },
    ]);

    res.json({ message: "Sample products added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;