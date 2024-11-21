// eslint-disable-next-line no-unused-vars
import React from "react";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the specific icon (faArrowLeft in this case)
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Payment() {
  return (
    <>
      <div className="payment-section">
        <div className="hero-payment">
          <div className="container">
            <div className="box-payment">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  {/* Correctly use FontAwesomeIcon to display the icon */}
                  <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <h1>payment</h1>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12"></div>
              </div>

              {/* Add a row to keep "Payment Method" and "Stripe" button next to each other */}
              <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-12">
                  <h5>payment method</h5>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12">
                  <button>stripe</button>
                </div>
              </div>
              <button>Add Stripe Card</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
