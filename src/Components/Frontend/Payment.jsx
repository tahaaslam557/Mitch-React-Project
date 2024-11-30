// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image2 from "../../../public/assets/image/stripe.png";
import Image from "../../../public/assets/image/brown.png";
import { useNavigate } from "react-router-dom";


function Payment() {
  const navigate = useNavigate();

  return (
    <>
      <section className="payment-plan-section">
        <div className="payment-hero">
          <div className="box box-div">
            <div className="container">
              <div className="row d-flex align-items-center justify-content-space-evenly">
                <div className="col-lg-4 col-md-4 col-sm-4 text-left">
                  <div className="icon-times">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="sub-icon-times"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <h2>payment</h2>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="icon-times2">
                    <img src={Image} />
                  </div>
                </div>

                <div className="col-md-10 st-h">
                  <h6>payment method</h6>
                </div>
                <div className="col-md-2">
                  {" "}
                  <img src={Image2} />{" "}
                </div>
                <button className="btn-card" onClick={() => navigate("/stripe-card")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>
                  add stripe card
                </button>
                <h3 className="total-py">total payable amount</h3>
                <hr />
                <div className="row ">
                  <div className="col-md-6 sub-total">
                    <p>Subtotal</p>
                  </div>
                  <div className="col-md-6 sub-price">
                    <p>$ 0.00</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 sub-total">
                    <p>Tax</p>
                  </div>
                  <div className="col-md-6 sub-price">
                    <p>$ 0.00</p>
                  </div>
                  <hr />
                </div>
                <div className="row">
                  <div className="col-md-6 sub-total">
                    <p>Total Amount</p>
                  </div>
                  <div className="col-md-6 sub-price">
                    <p>$ 0.00</p>
                  </div>
                </div>
                <button className="btn-1" onClick={() => navigate("/stripe-card")}>proceed to pay</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Payment;
