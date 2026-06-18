import Navbar from "./Navbar";
import "./ViewTokens.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewTokens() {
  const [tokens, setTokens] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadTokens();
  }, []);

  const loadTokens = () => {
    axios
      .get("https://smart-queue-backend-dpow.onrender.com/tokens")
      .then((res) => setTokens(res.data))
      .catch((err) => console.log(err));
  };

  const editToken = async (index) => {
    const newName = prompt("Enter New Name");

    if (!newName) return;

    await axios.put(
      `https://smart-queue-backend-dpow.onrender.com/tokens/${index}`,
      {
        name: newName,
      }
    );

    loadTokens();
  };

  const deleteToken = async (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this token?"
    );

    if (!confirmDelete) return;

    await axios.delete(
      `https://smart-queue-backend-dpow.onrender.com/tokens/${index}`
    );

    loadTokens();
  };

  return (
    <>
      <Navbar />

      <div className="table-container">
        <h2>All Tokens</h2>

        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

        <table className="token-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Token No</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {tokens
              .filter((token) =>
                token.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((token, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{token.tokenNo}</td>
                  <td>{token.name}</td>

                  <td>
                    <span
                      className={`status ${token.status}`}
                    >
                      {token.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => editToken(index)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteToken(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewTokens;