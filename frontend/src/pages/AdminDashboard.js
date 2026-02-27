import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const token = localStorage.getItem("token");

  // 🔹 Fetch all products
  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔹 Add Product
  const handleAdd = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/products/add",
        { name, price, description, image },
        { headers: { authorization: token } }
      );

      alert("Product Added Successfully!");
      setName("");
      setPrice("");
      setDescription("");
      setImage("");
      fetchProducts();
    } catch (err) {
      alert("Only Admin Can Add Product");
    }
  };

  // 🔹 Delete Product
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/products/${id}`,
        { headers: { authorization: token } }
      );

      fetchProducts();
    } catch (err) {
      alert("Delete Failed");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Dashboard</h2>

      <h3>Add Product</h3>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br /><br />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      /><br /><br />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /><br /><br />

      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      /><br /><br />

      <button onClick={handleAdd}>Add Product</button>

      <hr />

      <h3>All Products</h3>

      {products.map((p) => (
        <div key={p._id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <h4>{p.name}</h4>
          <p>₹ {p.price}</p>
          <p>{p.description}</p>
          <img src={p.image} alt="" width="120" />
          <br />
          <button onClick={() => handleDelete(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;