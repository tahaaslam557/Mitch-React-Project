// // eslint-disable-next-line no-unused-vars
// import React from "react";

// function Otp() {
//   return (
//     <>




 
//     <>
//       <section className="signup-section">
//         <div className="hero-signup">
//         <div className="box-signup">
//         <h1 className="signup-pg">OTP verification</h1>
//         <span className="headings">
//         <h3>Enter OTP Code</h3>
//         <p>check your email we have send you an email with oTP code</p>
//         </span>

//         <div className="col-lg-12 col-md-12 col-sm-12">
//         <button className="btn-1">login</button>
//       </div>

//       {/* Register Link */}
//       <div className="text-center mt-3">
//         <p className="register-link">
//           Don&apos;t have an account? <a href="/register">Register</a>
//         </p>
//       </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="row">
//           <div className="col-lg-3 col-md-3 col-sm12"></div>
//           <div className="col-lg-3 col-md-3 col-sm12"></div>
//           <div className="col-lg-3 col-md-3 col-sm12"></div>
//           <div className="col-lg-3 col-md-3 col-sm12"></div>
//         </div>
//       </div>

      
//       </section>
//     </>
 



     
//     </>
//   );
// }

// export default Otp;

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Otp() {
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
              <button className="btn-otp" onClick={handleSubmit}>verify</button>
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
