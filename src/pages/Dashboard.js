import Navbar from "./Navbar";
import "./Dashboard.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = () => {
    axios
      .get("https://smart-queue-backend-dpow.onrender.com/dashboard")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const callNext = async () => {
    await axios.post(
      "https://smart-queue-backend-dpow.onrender.com/next-token"
    );

    loadDashboard();
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="hero-section">
          <h1>🚀 SmartQueue</h1>

          <p>
            Smart Queue Management System
          </p>
        </div>

        <div className="cards">

          <div className="card">
            <h3>🎟 Total Tokens</h3>
            <p>{data.totalTokens}</p>
          </div>

          <div className="card">
            <h3>📢 Current Token</h3>
            <p>{data.currentToken}</p>
          </div>

          <div className="card">
            <h3>⏳ Waiting</h3>
            <p>{data.waitingUsers}</p>
          </div>

          <div className="card">
            <h3>🟢 Serving</h3>
            <p>{data.servingUsers}</p>
          </div>

          <div className="card">
            <h3>✅ Served</h3>
            <p>{data.servedUsers}</p>
          </div>

        </div>

        <button
          className="next-btn"
          onClick={callNext}
        >
          ➜ Call Next Token
        </button>

      </div>
    </>
  );
}

export default Dashboard;