import React from "react";
import "./Facility.css";
import { ImAirplane, ImCreditCard, ImHeadphones } from "react-icons/im";
import { AiFillCreditCard } from "react-icons/ai";

function Facility() {

  return (
    <div>
      <div className="facility-section section" id="facility">
        <div className="container">
          <div
            className="facility-container data-aos-duration"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out-cubic"
          >
            <div className="facility-box">
              <div className="facility-img_container">
                <div>
                  <ImAirplane />
                </div>
              </div>
              <p>FREE SHIPPING WORLD WIDE</p>
            </div>

            <div className="facility-box">
              <div className="facility-img_container">
                <div>
                  <AiFillCreditCard />
                </div>
              </div>
              <p>100% MONEY BACK GUARANTEE</p>
            </div>

            <div className="facility-box">
              <div className="facility-img_container">
                <div>
                  <ImCreditCard />
                </div>
              </div>
              <p>MANY PAYMENT GATEWAY</p>
            </div>

            <div className="facility-box">
              <div className="facility-img_container">
                <div>
                  <ImHeadphones />
                </div>
              </div>
              <p>24/7 ONLINE SUPPORT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facility;
