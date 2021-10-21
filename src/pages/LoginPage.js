import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="container">
        <div className="form-container sign-in-container">
          <form method="POST" className="login_form">
            <h1 className="login_title ">Sign in</h1>
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
            <a href="#" className="forgot_pass">
              Forgot your password?
            </a>
            <button className="login_btn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="login_title">Hello, Friend!</h1>
              <p className="login_desc">
                Enter your personal details and start journey with us
              </p>
              <Link to="/register">
                <button className="register_btn">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
