// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Otp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]); // Assuming OTP length is 4 digits

  // Handle OTP input change
  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    // Move focus to the next field if the current field is filled
    if (e.target.value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  // Submit OTP
  const handleSubmit = () => {
    console.log("OTP Submitted: ", otp.join(""));
    // Add logic to verify OTP here

    // Navigate to another page upon successful verification
    navigate("/otp-verified");
  };

  return (
    <>
      <section className="otp-section">
        <div className="hero-otp">
          <div className="box-otp">
            <h1 className="otp-pg">OTP Verification</h1>
            <span className="headings text-center">
              <h3>Enter OTP Code</h3>
              <p>Check your email, we have sent you an email with an OTP code.</p>
            </span>

            <div className="otp-input">
              <div className="otp-field-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    id={`otp-${index}`}
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    maxLength="1"
                    className="otp-field"
                    autoFocus={index === 0}
                    placeholder="-"
                  />
                ))}
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12">
              <button className="btn-otp" onClick={handleSubmit}>
                Verify
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center mt-3">
              <p className="register-link">
                didn&apos;t receive the email? <a href="/register">resend</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Otp;
