import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount, search, setSearch }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <Link to="/" style={styles.logo}>
        ShopX
      </Link>

      {/* Search */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* Right Section */}
      <div style={styles.right}>
        <Link to="/cart" style={styles.link}>
          Cart ({cartCount})
        </Link>

        {token ? (
          <>
            <span style={styles.user}>
              Hello, {user?.name}
            </span>
            <Link to="/logout" style={styles.link}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>
              Login
            </Link>
            <Link to="/register" style={styles.link}>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 25px",
    backgroundColor: "#111",
    color: "white",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
  },
  search: {
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "260px",
    backgroundColor: "white",
    color: "black",        // ✅ FIXED TEXT COLOR
    outline: "none",
    fontSize: "14px",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "14px",
  },
  user: {
    fontWeight: "bold",
    fontSize: "14px",
  },
};

export default Navbar;