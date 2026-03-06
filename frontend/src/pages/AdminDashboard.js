import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {

  const API = "https://fullstack-shopping-website.onrender.com";

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const fetchProducts = async () => {
    const res = await axios.get(`${API}/api/products`);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async () => {

    await axios.post(`${API}/api/products/add`, {
      name,
      price,
      description,
      image,
    });

    alert("Product Added");

    setName("");
    setPrice("");
    setDescription("");
    setImage("");

    fetchProducts();
  };

  const handleDelete = async (id) => {

    await axios.delete(`${API}/api/products/${id}`);

    fetchProducts();
  };

  return (
    <div style={{ padding: 40 }}>

      <h2>Admin Dashboard</h2>

      <h3>Add Product</h3>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <br /><br />

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