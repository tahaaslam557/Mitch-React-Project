// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the icon
import icon from "../../../public/assets/SVG/circle-check.png"
import { useNavigate } from "react-router-dom";


function Subscriptionplan() {
  const navigate = useNavigate();

  return (
    <>
      <section className="sub-plan-section">
        <div className="sub-hero">
          <div className="box box-div">
            <div className="container-fluid">
              <div className="row d-flex justify-content-space-around align-items-center">
                <div className="col-md-6 mb-4">
                  <div className="sub-plan-heading">
                    <p>subscription plans</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="icon-times">
                    <button className="close" onClick={() => navigate("/login-inner")}>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="sub-icon-times"
                    />
                    </button>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box-under">
                    <div className="heading-sub">
                      <h6 className="package-name">basic</h6>
                      <p className="price">
                        $0.99 <sub>/mo</sub>
                      </p>
                    </div>
                    <p className="point">
                      <img src={icon} alt="" className="" />
                      7 days free trail
                    </p>
                    <p className="point">
                    <img src={icon} alt="" className="" />
                      20 generation per month
                    </p>
                    <button className="btn-1" onClick={() => navigate("/payment")}>proceed</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box-under">
                    <div className="heading-sub">
                      <h6 className="package-name">premium</h6>
                      <p className="price">
                        $1.99 <sub>/mo</sub>
                      </p>
                    </div>
                    <p className="point">
                    <img src={icon} alt="" className="" />7 days free trail
                    </p>
                    <p className="point">
                    <img src={icon} alt="" className="" />
                      45 generation per month
                    </p>
                    <button className="btn-1" onClick={() => navigate("/payment")}>proceed</button>
                  </div>
                </div>

                <div className="box-under1">
                  <div className="heading-sub">
                    <h6 className="package-name">gold</h6>
                    <p className="price">
                      $--.-- <sub>/mo</sub>
                    </p>
                  </div>
                  <p className="point">
                  <img src={icon} alt="" className="" />
                    00 days free trial
                  </p>
                  <p className="point">
                  <img src={icon} alt="" className="" />
                    00 generation per month
                  </p>
                  <p className="point">
                  <img src={icon} alt="" className="" />
                    00 audio generations
                  </p>
                  <button className="btn-2">comming soon</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscriptionplan;
