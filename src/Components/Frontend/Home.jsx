// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="Home-section">
          <div className="hero">
          <div className="container">
            <div className="box">
              <h1>Story Generator</h1>
              <h3>Explore your infinite imagination</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                <button className="log-btn" onClick={() => navigate("/signin")}>Login</button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <button className="btn-1" onClick={() => navigate("/signup")}>Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
