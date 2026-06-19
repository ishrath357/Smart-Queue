import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        🚀 QueueEase
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={`nav-links ${
          menuOpen ? "show" : ""
        }`}
      >
        <Link
          to="/dashboard"
          onClick={() => setMenuOpen(false)}
        >
          Dashboard
        </Link>

        <Link
          to="/add-token"
          onClick={() => setMenuOpen(false)}
        >
          Add Token
        </Link>

        <Link
          to="/view-tokens"
          onClick={() => setMenuOpen(false)}
        >
          View Tokens
        </Link>

        <Link
          to="/analytics"
          onClick={() => setMenuOpen(false)}
        >
          Analytics
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;