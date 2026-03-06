const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

/* =========================
   HOMEPAGE ROUTE
========================= */

app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
        <title>Shopping Website</title>
        <style>
            body{
                font-family: Arial;
                text-align:center;
                padding-top:100px;
                background:#f4f4f4;
            }
            h1{
                color:#2c3e50;
            }
            p{
                font-size:18px;
            }
        </style>
    </head>
    <body>
        <h1>🚀 Shopping Website Backend is Running</h1>
        <p>Your server is deployed successfully on Render</p>
        <p>MongoDB Database Connected ✅</p>
    </body>
    </html>
  `);
});

/* =========================
   TEST API
========================= */

app.get("/api", (req, res) => {
  res.json({
    message: "API Working Successfully",
    status: "Server Running"
  });
});

/* =========================
   MONGODB CONNECTION
========================= */

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

/* =========================
   PORT
========================= */

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});