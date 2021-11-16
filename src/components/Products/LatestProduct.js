import React from "react";
import ProductsData from "../ProductsData/ProductsData";

function LatestProducts() {
  return (
    <div>
      <h2 className="title">Latest Products</h2>
      <div className="small-container">
        <div className="row">
          <div className="col-4">
            <ProductsData
              image={
                require("../../images/Shopping-Cart/Long-Sleeve-B.jpg").default
              }
              alt="cart"
              title="Men's Long-Sleeve Top Nike Pro Color (Obsidian/Ocean Fog)"
              price={50.0}
              rating={5}
            />
          </div>
          <div className="col-4">
            <ProductsData
              image={
                require("../../images/Shopping-Cart/Long-Sleeve-S.jpg").default
              }
              alt="cart"
              title="Men's Long-Sleeve Top Nike Pro Color (Light Army/Black)"
              price={50.0}
              rating={5}
            />
          </div>
          <div className="col-4">
            <ProductsData
              image={
                require("../../images/Shopping-Cart/nike-shoes20.jpg").default
              }
              alt="cart"
              title="Men's Shoes Air Jordan 1 Mid Color (Crimson/Black/White)"
              price={120.0}
              rating={5}
            />
          </div>
          <div className="col-4">
            <ProductsData
              image={
                require("../../images/Shopping-Cart/NikeAirZoom.jpg").default
              }
              alt="cart"
              title="Nike Air Zoom NEXT% Color (Turquoise/Black Aqua/White)"
              price={275.0}
              rating={4}
            />
          </div>
          <div className="col-4">
            <ProductsData
              image={
                require("../../images/Shopping-Cart/NikeGymBag.jpg").default
              }
              alt="cart"
              title="Nike Women's Training Bag Color (Iced Lilac/Iced Lilac/Wild Berry)"
              price={40.0}
              rating={5}
            />
          </div>
          <div className="col-4">
            <ProductsData
              image={
                require("../../images/Shopping-Cart/NikeSpace36.jpg").default
              }
              alt="cart"
              title="Nike Space Hippie 04 Color (Dark Stucco/Light Bone/Green Glow)"
              price={130.0}
              rating={4}
            />
          </div>
          <div className="col-4">
            <ProductsData
              image={
                require("../../images/Shopping-Cart/WomenJumpsuit.jpg").default
              }
              alt="cart"
              title="Women's Infinalon Jumpsuit (Plus Size) Color Royal Pulse/Aluminum"
              price={110.0}
              rating={4}
            />
          </div>
          <div className="col-4">
            <ProductsData
              image={
                require("../../images/Shopping-Cart/Zip-Front.jpg").default
              }
              alt="cart"
              title="Women's High-Support Padded Zip-Front Sports Bra Color (Violet)"
              price={50.0}
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestProducts;
