import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ cartCount, search, setSearch }) {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // ✅ SAFE USER PARSE (NO CRASH)
  let user = null;
  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      user = JSON.parse(storedUser);
    }
  } catch (error) {
    user = null;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        ShopX
      </Link>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      <div style={styles.right}>
        <Link to="/cart" style={styles.link}>
          Cart ({cartCount})
        </Link>

        {token ? (
          <>
            <span style={styles.user}>
              Hello, {user?.name || "User"}
            </span>

            <button onClick={handleLogout} style={styles.button}>
              Logout
            </button>
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
    color: "black",
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
  button: {
    background: "red",
    border: "none",
    padding: "6px 12px",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
  },
  user: {
    fontWeight: "bold",
    fontSize: "14px",
  },
};

export default Navbar;