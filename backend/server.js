const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

// test homepage route
app.get("/", (req, res) => {
  res.send("🚀 Shopping Website Backend is Running Successfully!");
});

// test API route
app.get("/api", (req, res) => {
  res.json({
    message: "API Working Successfully",
    status: "Server Running",
  });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.log("❌ MongoDB Connection Error:", error);
  });

// port
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});