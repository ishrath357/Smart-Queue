import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const register = () => {

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Account Created Successfully");

    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={register}>
          Create Account
        </button>

      </div>
    </div>
  );
}

export default Register;