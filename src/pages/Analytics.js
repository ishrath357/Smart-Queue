import Navbar from "./Navbar";
import "./Analytics.css";

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

  const data = {
    labels: [
      "Waiting",
      "Serving",
      "Served"
    ],
    datasets: [
      {
        data: [5, 2, 8],
        backgroundColor: [
          "#3b82f6",
          "#22c55e",
          "#64748b"
        ]
      }
    ]
  };

  return (
    <>
      <Navbar />

      <div className="analytics-container">

        <h2>Queue Analytics</h2>

        <div className="chart-box">
          <Pie data={data} />
        </div>

        <div className="stats">

          <div className="stat-card">
            <h3>Waiting</h3>
            <p>5</p>
          </div>

          <div className="stat-card">
            <h3>Serving</h3>
            <p>2</p>
          </div>

          <div className="stat-card">
            <h3>Served</h3>
            <p>8</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Analytics;