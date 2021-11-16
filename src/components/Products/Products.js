import React from "react";
import ProductsData from "../ProductsData/ProductsData";
import LatestProducts from "./LatestProduct";
import "./Products.css";

function Products() {
  return (
    <div className="products" id="products">
      {/*Featured Products */}
      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          <div className="col-4">
            <ProductsData
              image={require("../../images/Shopping-Cart/hoodieB.jpg").default}
              alt="cart"
              title="Men's Pullover Training Hoodie Nike Therma Color (Black)"
              price={50.0}
              rating={5}
            />
          </div>
          <div className="col-4">
            <ProductsData
              image={require("../../images/Shopping-Cart/hoodieG.jpg").default}
              alt="cart"
              title="Men's Pullover Training Hoodie Nike Therma  Color (Grey)"
              price={50.0}
              rating={5}
            />
          </div>
          <div className="col-4">
            <ProductsData
              image={require("../../images/Shopping-Cart/hoodieS.jpg").default}
              alt="cart"
              title="Men's Pullover Training Hoodie Nike Therma Color (Silver)"
              price={50.0}
              rating={5}
            />
          </div>
          <div className="col-4">
            <ProductsData
              image={require("../../images/Shopping-Cart/hoodieW.jpg").default}
              alt="cart"
              title="Men's Pullover Training Hoodie Nike Therma Color (White)"
              price={50.0}
              rating={5}
            />
          </div>
        </div>
        {/*Latest Products*/}
        <LatestProducts />
      </div>
    </div>
  );
}

export default Products;
