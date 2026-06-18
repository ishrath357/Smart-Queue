import Navbar from "./Navbar";
import "./AddToken.css";
import { useState } from "react";
import axios from "axios";


function AddToken() {
  const [name, setName] = useState("");

  const addToken = () => {
    axios.post("https://smart-queue-backend-dpow.onrender.com/tokens", {
      name: name,
    });

    alert("Token Added");
    setName("");
  };

  return (
    <>
    <Navbar />
    <div className="form-container">

     

      <h2>Add New Token</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addToken}>Add Token</button>

    </div>
    </>
  );
}

export default AddToken;