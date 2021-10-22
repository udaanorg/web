import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <img
        src={process.env.PUBLIC_URL + "/landing/corner.png"}
        className="landing-corner"
        alt=""
      />
      <div className="hero-img">
        <img src={process.env.PUBLIC_URL + "/landing/hero.png"} alt="" />
      </div>
      <div className="landing-page">
        <div className="landing-header">
          <div className="logo-wrapper">
            <div className="logo">
              <img src={process.env.PUBLIC_URL + "/landing/LOGO.png"} alt="" />
            </div>
            <div className="company">UDAAN</div>
          </div>

          <div className="container-buttons">
            <Link to="/login">
              <button className="btn-login">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn-signup">Signup</button>
            </Link>
          </div>
        </div>
        <div className="hero">
          <div className="hero-info">
            <p>With UDAAN</p>
            <h1>Attend or Host Events you Love.</h1>
            <p className="greyscale">
              The platform meant to host and attend in person & virtual events
            </p>
            <Link to="/register">
              <button className="btn-join">Join UDAAN Now</button>
            </Link>
          </div>
        </div>

        <section className="what-we-do">
          <div className="container-image">
            <img
              className="img-ngo"
              src={process.env.PUBLIC_URL + "/landing/ngo.png"}
              alt=""
            />
          </div>
          <div className="content">
            <h1>What we do ?</h1>
            <br />
            <p>
              We bring <span className="highlight"> organizations </span> and
              <span className="highlight"> volunteers </span>on a single
              platform,thus simplifying further processes to connect,track and
              manage Events happening around!
            </p>
            <br />
            <button className="btn-explore">Explore More</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
