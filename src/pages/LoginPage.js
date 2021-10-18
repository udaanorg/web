import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="login">
        <h2> Please Login </h2>
        <form method="POST" className="login_form">
          <div className="login_inputs">
            <input
              autoFocus
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(text) => setEmail(text.target.value)}
            />
            <input
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(text) => setPassword(text.target.value)}
            />
          </div>

          <button value="Login"> Login </button>
          <button value="Register"> Register </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
