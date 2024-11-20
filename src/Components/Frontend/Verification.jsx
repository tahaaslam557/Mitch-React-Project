// eslint-disable-next-line no-unused-vars
import React from "react";
import verifyImage from "../../../public/assets/image/verify.png"; // Adjust the path based on your project structure

function Verification() {
  return (
    <>
      <section className="verify-section">
        <div className="hero-verify">
          <div className="container-verify">
            <div className="box-verify">
              <h1 className="verify-pg">Welcome to <br /> <span >Story generator</span></h1>
              <span>
                <img src={verifyImage} alt="Verification Icon" width="100" />
              </span>
              <h1 className="verify1-pg">Sign-up Successful</h1>
              <p className="headings">
                You’re just one step ahead to generate stories that you want to create.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Verification;
