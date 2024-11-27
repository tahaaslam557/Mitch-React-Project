// eslint-disable-next-line no-unused-vars
import React from "react";
import verifyimg from "../../../public/assets/image/verify_2.png";

function Payment_successfull() {
  return (
    <>
      <section className="successful-section">
        <div className="hero-successful">
          <div className="container-successful">
            <div className="box-successful">
              <h1 className="successful-pg">
                Story
                <br />
                Generator
              </h1>
              <span>
                <img src={verifyimg} alt="Verification Icon" width="100" />
              </span>
              <h1 className="successful_1-pg">payment successful !</h1>
              <p className="headings_1">
                let’s start generating stories that you want to create.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Payment_successfull;
