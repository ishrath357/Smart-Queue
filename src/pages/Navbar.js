import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2>QueueEase</h2>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add-token">Add Token</Link>
        <Link to="/view-tokens">View Tokens</Link>
        <Link to="/analytics">Analytics</Link>
      </div>
    </div>
  );
}

export default Navbar;