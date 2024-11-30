// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle Remember Me checkbox change
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  // Handle Forgot Password click
  const handleForgotPassword = () => {
    alert("Redirecting to password reset page...");
    // You could redirect to a password reset page or show a modal here
  };

  return (
    <>
      <section className="signin-section">
        <div className="hero-sign">
          <div className="container-sign">
            <div className="box-sign">
              <h1 className="log-pg">Login</h1>

              {/* Email Input */}
              {/* Email Input */}
              <div className="input-group">
                <div className="input-container">
                  <label htmlFor="email" className="input-label">
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="input-container">
                  <label htmlFor="password" className="input-label">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    Password
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    className="input-field"
                  />
                  <FontAwesomeIcon
                    icon={passwordVisible ? faEyeSlash : faEye}
                    className="eye-icon"
                    onClick={togglePasswordVisibility}
                  />
                </div>
              </div>
              {/* Remember Me and Forgot Password Section */}
              <div className="row">
                {/* Remember Me Section (Left) */}
                <div className="col-lg-6 col-md-6 col-sm-12 remember-me">
                  <label htmlFor="rememberMe" className="switch">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                    />
                    <span className="slider"></span>
                  </label>
                  <label htmlFor="rememberMe" className="remember-label">
                    Remember me
                  </label>
                </div>

                {/* Forgot Password Section (Right) */}
                <div className="col-lg-6 col-md-6 col-sm-12 forgot-password">
                  <a
                    href="#"
                    onClick={handleForgotPassword}
                    className="forgot-link"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-lg-12 col-md-12 col-sm-12">
                <button className="btn-1" onClick={() => navigate("/login-inner")}>
                  login
                </button>
              </div>

              {/* Register Link */}
              <div className="text-center mt-3">
                <p className="register-link">
                  Don&apos;t have an account? <a href="/signup">Register</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
