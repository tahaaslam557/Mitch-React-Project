// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "../../../public/assets/image/brown.png";
import { useNavigate } from "react-router-dom";

function Add_Stripe_card() {
  const navigate = useNavigate();
  return (
    <>
      <section className="Stripe-section">
        <div className="Stripe-hero">
          <div className="box box-div">
            <div className="container">
              <div className="row d-flex align-items-center justify-content-space-evenly">
                <div className="col-lg-3 col-md-3 col-sm-3 text-left">
                  <div className="icon-times">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="sub-icon-times"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                  <h2>add stripe card</h2>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-right">
                  <div className="icon-times2">
                    <img src={Image} />
                  </div>
                </div>

                <div className="col-md-10 st-h">
                  <h6>enter your card details</h6>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="text" className="input-label">
                        card holder name
                      </label>
                      <div className="icon-input">
                        <input
                          type="text"
                          id="card-holder-name"
                          className="input-field"
                          placeholder="type filed"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="card-namber" className="input-label">
                        Card Number
                      </label>
                      <div className="icon-input">
                        <input
                          type="Number"
                          id="card-number"
                          className="input-field"
                          placeholder="00 000 0000 0000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="expiry-date" className="input-label">
                        expiry date
                      </label>
                      <div className="icon-input">
                        <input
                          type="text"
                          id="expiry-date"
                          className="input-field"
                          placeholder="MM/YY"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="cvv" className="input-label">
                        CVV
                      </label>
                      <div className="icon-input">
                        <input
                          type="number"
                          id="CVV"
                          className="input-field"
                          placeholder="----"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn-1" onClick={() => navigate("/payment-confirm")}>proceed to pay</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Add_Stripe_card;
