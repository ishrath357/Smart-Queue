import { useState } from "react";

function ForgotPassword() {

  const [email,setEmail] = useState("");

  const resetPassword = () => {

    const user =
      JSON.parse(localStorage.getItem("user"));

    if(user && user.email === email){
      alert(
        "Your Password: " + user.password
      );
    }
    else{
      alert("Email not found");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h2>Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <button onClick={resetPassword}>
          Recover Password
        </button>

      </div>
    </div>
  );
}

export default ForgotPassword;