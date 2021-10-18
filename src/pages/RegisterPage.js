import React, { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="register">
        <h2> Register Here </h2>
        <form method="POST" className="register_form">
          <div className="register_inputs">
            <input
              autoFocus
              type="text"
              name="name"
              placeholder="Username"
              value={name}
              onChange={(text) => setName(text.target.value)}
            />
            <input
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

          <button value="Register"> Register </button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
