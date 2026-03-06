import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";

/* BACKEND URL */

const API = "https://fullstack-shopping-website.onrender.com";

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

/* GET PRODUCTS */

  useEffect(() => {
    axios.get(`${API}/api/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

/* GET CART */

  useEffect(() => {
    axios.get(`${API}/api/cart`)
      .then(res => setCart(res.data))
      .catch(err => console.log(err));
  }, []);

/* ADD TO CART */

  const addToCart = async (product) => {

    await axios.post(`${API}/api/cart`, {
      productId: product._id,
      name: product.name,
      price: product.price,
      image: product.image
    });

    const updated = await axios.get(`${API}/api/cart`);
    setCart(updated.data);
  };

/* REMOVE FROM CART */

  const removeFromCart = async (id) => {

    await axios.delete(`${API}/api/cart/${id}`);

    setCart(cart.filter(item => item._id !== id));
  };

  return (

    <Router>

      <Navbar cartCount={cart.length} search={search} setSearch={setSearch} />

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
          path="/admin"
          element={
            <PrivateRoute adminOnly={true}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>

    </Router>

  );
}

export default App;