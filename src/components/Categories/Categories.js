import React from "react";
import {
  CategoriesContainer,
  CategoriesRow,
  CategoriesSection,
  Col3,
  Img,
} from "./CategoriesElements";

const Categories = () => {
  return (
    <CategoriesSection
      className="data-aos-duration"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1800"
      data-aos-easing="ease-in-out-cubic"
    >
      <CategoriesContainer>
        <CategoriesRow>
          <Col3>
            <Img
              src={require("../../images/category/category-1.jpg").default}
              alt="category-1"
            />
          </Col3>
          <Col3>
            <Img
              src={require("../../images/category/category-2.jpg").default}
              alt="category-2"
            />
          </Col3>
          <Col3>
            <Img
              src={require("../../images/category/category-3.jpg").default}
              alt="category-3"
            />
          </Col3>
        </CategoriesRow>
      </CategoriesContainer>
    </CategoriesSection>
  );
};

export default Categories;
