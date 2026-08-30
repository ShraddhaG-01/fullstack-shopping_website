import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import API from "./api";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  // 1. Fetch Products
  const fetchProducts = () => {
    axios
      .get(`${API}/api/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Product fetch error:", err));
  };

  // 2. Fetch Cart Items
  const fetchCart = () => {
    axios
      .get(`${API}/api/cart`)
      .then((res) => setCart(res.data))
      .catch((err) => console.error("Cart fetch error:", err));
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // 3. Add to Cart
  const addToCart = async (product) => {
    try {
      await axios.post(`${API}/api/cart`, {
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      fetchCart();
      alert(`"${product.name}" added to cart!`);
    } catch (error) {
      console.error("Add to cart error:", error);
      alert("Unable to add product to cart.");
    }
  };

  // 4. Remove from Cart
  const removeFromCart = async (id) => {
    try {
      await axios.delete(`${API}/api/cart/${id}`);
      setCart((prevCart) => prevCart.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Remove cart error:", error);
    }
  };

  return (
    <Router>
      {/* Top Navbar with Search, Cart Count, Login/Logout */}
      <Navbar cartCount={cart.length} search={search} setSearch={setSearch} />

      {/* Page Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              addToCart={addToCart}
              search={search}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;