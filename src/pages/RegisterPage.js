import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/RegisterPage.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [kitchen, setKitchen] = useState("");

  return (
    <>
      <div className="register">
        <div className="container">
          <div className="form-container register-container">
            <form method="POST" className="register_form">
              <h1 className="login_title mb-4">Register</h1>
              <input
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
                name="kitchen"
                placeholder="Kitchen no."
                type="text"
                value={kitchen}
                onChange={(text) => setKitchen(text.target.value)}
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
              <button className="login_btn">register</button>
            </form>
          </div>
          <div className="reg-overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1 className="login_title">Welcome Back!</h1>
                <p className="login_desc">
                  To keep connected with us please login with your personal info
                </p>
                <Link to="/login">
                  <button className="register_btn">Sign In</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
