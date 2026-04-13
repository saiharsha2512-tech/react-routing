import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <h2>MyPlatform</h2>

      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/login" style={{ margin: "10px", color: "white" }}>Login</Link>
      <Link to="/register" style={{ margin: "10px", color: "white" }}>Register</Link>
      <Link to="/dashboard" style={{ margin: "10px", color: "white" }}>Dashboard</Link>
    </nav>
  );
}

export default Header;