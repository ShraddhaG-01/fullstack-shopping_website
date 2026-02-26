import React from "react";

function Home({ products, addToCart, search }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Products</h2>

      <div style={styles.container}>
        {filteredProducts.map((product) => (
          <div key={product._id} style={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
            />
            <h3>{product.name}</h3>
            <p style={{ color: "blue", fontWeight: "bold" }}>
              ₹{product.price}
            </p>
            <button onClick={() => addToCart(product)} style={styles.btn}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
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
    background: "#f3f3f3",
    padding: "15px",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center",
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
  },
};

export default Home;