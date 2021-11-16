import React from "react";
import "./ProductsData.css";
import { AiFillStar } from "react-icons/ai";

function ProductsData({ id, title, price, rating, image }) {
  return (
    <div
      className="data-aos-duration"
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1800"
      data-aos-easing="ease-in-out-cubic"
    >
      <div className="small-container">
        <div className="row">
          <div className="col-4 product">
            <img src={image} alt="product"/>
            <h4>{title}</h4>
            <div className="rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>
                    <AiFillStar />
                  </p>
                ))}
            </div>
            <p>
              <span style={{ color: "green", fontSize: "15px" }}>$</span>
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsData;
