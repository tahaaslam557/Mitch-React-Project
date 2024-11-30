// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

import verifyimg from "../../../public/assets/image/verify_2.png";
import { useNavigate } from "react-router-dom";

function Payment_successfull() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /subplans after 5 seconds
    const timer = setTimeout(() => {
      navigate("/login-inner");
    }, 2000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);
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
