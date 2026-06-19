import Navbar from "./Navbar";
import "./Analytics.css";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function Analytics() {

  const [stats, setStats] = useState({
    waitingUsers: 0,
    servingUsers: 0,
    servedUsers: 0
  });

  useEffect(() => {

    const loadData = () => {
      axios
        .get(
          "https://smart-queue-backend-dpow.onrender.com/dashboard"
        )
        .then((res) => {
          setStats(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    loadData();

    const interval = setInterval(() => {
      loadData();
    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const data = {
    labels: [
      "Waiting",
      "Serving",
      "Served"
    ],
    datasets: [
      {
        data: [
          stats.waitingUsers,
          stats.servingUsers,
          stats.servedUsers
        ],
        backgroundColor: [
          "#3b82f6",
          "#22c55e",
          "#64748b"
        ],
        borderWidth: 2
      }
    ]
  };

  return (
    <>
      <Navbar />

      <div className="analytics-container">

        <h2>📊 SmartQueue Analytics</h2>

        <div className="chart-box">
          <Pie data={data} />
        </div>

        <div className="stats">

          <div className="stat-card">
            <h3>⏳ Waiting</h3>
            <p>{stats.waitingUsers}</p>
          </div>

          <div className="stat-card">
            <h3>🟢 Serving</h3>
            <p>{stats.servingUsers}</p>
          </div>

          <div className="stat-card">
            <h3>✅ Served</h3>
            <p>{stats.servedUsers}</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Analytics;