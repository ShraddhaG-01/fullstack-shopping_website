import React, { useEffect, useState } from "react";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("ERROR:", err));
  }, []);

  return (
    <div style={{ padding: "30px", backgroundColor: "#f1f3f6", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "20px" }}>All Products</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              background: "white",
              padding: "15px",
              width: "220px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <h4 style={{ margin: "10px 0" }}>{product.name}</h4>
            <p style={{ fontWeight: "bold", color: "#2874f0" }}>
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: "#2874f0",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;