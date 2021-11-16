import React from "react";
import "./Offer.css";

function Offer() {
  return (
    <div>
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <div className="offer-image">{/*Image will go here*/}</div>
            </div>
            <div className="col-2">
              <p>Exclusively Available in our shop</p>
              <h1>Sunglasses Nike Circuit Polarized</h1>
              <small>
                With their square lenses and keyhole nose bridge, the Nike
                Circuit Polarized Sunglasses carve a strong style path.
                Lightweight materials and subtle nose-pad detail make them super
                wearable. Polarized lenses reduce reflective glare from snow and
                water Nylon frame is lightweight and durable. Soft, comfortable
                rubber inlay nose pads provide stability and grip. 4-base flat
                lens and slim profile offer everyday coverage.
              </small>
              <a href="#" className="offer-btn">
                Explore Now <span>&#10149;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
