import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fullstack-shopping-website.onrender.com/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Shopping Website 🛍️</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              width: "250px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <h2>{product.name}</h2>
            <h3>₹{product.price}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;