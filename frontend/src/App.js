import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

// ✅ ADD THESE TWO IMPORTS
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch products
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Fetch cart
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cart")
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Add to cart
  const addToCart = async (product) => {
    try {
      await axios.post("http://localhost:5000/api/cart", {
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
      });

      const updatedCart = await axios.get(
        "http://localhost:5000/api/cart"
      );
      setCart(updatedCart.data);
    } catch (error) {
      console.error(
        "Add to cart error:",
        error.response?.data || error.message
      );
    }
  };

  // Remove from cart
  const removeFromCart = async (id) => {
    await axios.delete(`http://localhost:5000/api/cart/${id}`);
    setCart(cart.filter((item) => item._id !== id));
  };

  return (
    <Router>
      <Navbar
        cartCount={cart.length}
        search={search}
        setSearch={setSearch}
      />

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

        {/* ✅ PROTECTED ADMIN ROUTE */}
        <Route
          path="/admin"
          element={
            <PrivateRoute adminOnly={true}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;