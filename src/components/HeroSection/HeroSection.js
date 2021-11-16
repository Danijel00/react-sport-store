import React from "react";
import image from "../../images/header/center.jpg";
import {
  Col2,
  HeroContainer,
  HeroRow,
  HomeBackground,
  H1Text,
  PText,
  HeroButton,
  HeroContent,
} from "./HeroElements";


const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroRow>
          <Col2>
            <H1Text>
              Give Your Workout <br /> A New Style!
            </H1Text>
            <PText>
              Success isn't always about greatness. It's about consistency.{" "}
              <br />
              Consistent hard work gains success. Practice makes Perfect!
            </PText>
            <HeroButton
              id="products"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-90}
            >
              Explore Now &#8620;
            </HeroButton>
          </Col2>
          <Col2>
            <HomeBackground src={image} alt="home" />
          </Col2>
        </HeroRow>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
