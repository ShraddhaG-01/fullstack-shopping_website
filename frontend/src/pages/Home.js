import React from "react";

function Home({ products = [], addToCart, search = "" }) {
  const filteredProducts = (products || []).filter((product) =>
    (product.name || "").toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>All Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div style={styles.container}>
          {filteredProducts.map((product) => (
            <div key={product._id} style={styles.card}>
              <img
                src={product.image}
                alt={product.name}
                style={styles.image}
              />
              <h3 style={{ margin: "10px 0 5px", fontSize: "18px" }}>{product.name}</h3>
              <p style={{ color: "#2874f0", fontWeight: "bold", fontSize: "16px", margin: "5px 0" }}>
                ₹{product.price}
              </p>
              <p style={{ color: "#666", fontSize: "13px", margin: "0 0 10px" }}>
                {product.description}
              </p>
              <button onClick={() => addToCart(product)} style={styles.btn}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    background: "#fff",
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  btn: {
    backgroundColor: "#2874f0",
    color: "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Home;