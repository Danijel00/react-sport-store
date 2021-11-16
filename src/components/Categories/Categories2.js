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
              src={require("../../images/category/category-4.jpg").default}
              alt="category-4"
            />
          </Col3>
          <Col3>
            <Img
              src={require("../../images/category/category-5.jpg").default}
              alt="category-5"
            />
          </Col3>
          <Col3>
            <Img
              src={require("../../images/category/category-6.jpg").default}
              alt="category-6"
            />
          </Col3>
        </CategoriesRow>
      </CategoriesContainer>
    </CategoriesSection>
  );
};

export default Categories;
