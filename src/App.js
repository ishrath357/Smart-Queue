import Analytics from "./pages/Analytics";
import ViewTokens from "./pages/ViewTokens";
import AddToken from "./pages/AddToken";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function Login() {
  return (
    <div className="container">
      <div className="login-box">
        <h2>QueueEase Login</h2>

        <input type="email" placeholder="Enter Email" />

        <input type="password" placeholder="Enter Password" />

        <Link to="/dashboard">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-token" element={<AddToken />} />
        <Route path="/view-tokens" element={<ViewTokens />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;