// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image2 from "../../../public/assets/image/stripe-2.png";
import Image from "../../../public/assets/image/brown.png";

function Payment_confirm() {
  return (
    <>
      <section className="payment-confrim-section">
        <div className="payment-confrim-hero">
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
                <div className="container pay-select">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={Image2} />{" "}
                    </div>
                    <div className="col-md-9">
                      {" "}
                      <h6>john doe</h6><br/>
                      <h6>0123******456</h6>
                    </div>
                    <div className="col-md-1">
                      {" "}
                      <input type="radio" name="" id="" className="radio-inpur" />
                    </div>
                  </div>
                </div>

                <h3 className="total-py">total payable amount</h3>
                <hr />
                <div className="row">
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
                <button className="btn-1">
                  <a href="#">proceed to pay</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Payment_confirm;
