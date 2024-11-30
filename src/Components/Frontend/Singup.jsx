// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-phone-input-2/lib/style.css"; // Import the CSS file
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";

import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Signup() {
  const navigate = useNavigate();
  const [passwordVisible, setShowPassword, showPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!passwordVisible, !showPassword);
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword); // Toggle between true and false
  // };

  // Handle Remember Me checkbox change
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  // Handle Forgot Password click
  const handleForgotPassword = () => {
    alert("Redirecting to password reset page...");
    // You could redirect to a password reset page or show a modal here
  };

  const [phone, setPhone] = useState("");

  return (
    <>
      <section className="signup-section">
        <div className="hero-signup">
          <div className="container-signup">
            <div className="box-signup">
              <h1 className="signup-pg">Signup</h1>

            {/* Signup Form */}
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    {/* Name Field */}
                    <div className="form-group">
                      <label htmlFor="name">full name</label>
                      <div className="icon-input">
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                        <input
                          type="text"
                          id="name"
                          placeholder="type field"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <div className="icon-input">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="input-icon-1"
                      />
                      <input
                        type="email"
                        id="email"
                        placeholder="email@demo.com"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="number">phone</label>
                    <PhoneInput
                      country={"us"} // Default country
                      value={phone}
                      onChange={(phone) => setPhone(phone)} // Set the phone number when it changes
                      inputClass="input-field" // Optional: Apply custom styles
                      className="PhoneInput"
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <div className="icon-input">
                      <FontAwesomeIcon icon={faLock} className="input-icon-1" />
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        placeholder="*********"
                        className="input-field"
                      />
                    </div>
                    <FontAwesomeIcon
                      icon={passwordVisible ? faEyeSlash : faEye}
                      className="eye-icon"
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="icon-input">
                      <FontAwesomeIcon icon={faLock} className="input-icon-1" />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        className="input-field"
                      />
                    </div>
                  </div>

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
              </div>

              {/* Submit Button */}
              <div className="col-lg-12 col-md-12 col-sm-12">
                <button className="btn-1"  onClick={() => navigate("/otp")}>Sign Up</button>
              </div>

              {/* Register Link */}
              <div className="text-center mt-3">
                <p className="register-link">
                already have an account? <a href="/signin">login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
