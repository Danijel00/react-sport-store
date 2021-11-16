import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 900px;
  position: relative;
`;

export const HeroContent = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1300px;
  margin: 0 auto;
  z-index: 1;
`;

export const HeroRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const Col2 = styled.div`
  flex-basis: 50%;
  min-width: 300px;

  @media screen and (max-width: 960px) {
    flex-basis: 60%;
  }
`;

export const HomeBackground = styled.img`
  max-width: 100%;
  padding: 60px 0;
  margin-top: 250px;

  @media screen and (max-width: 960px) {
    padding: 30px 0;
    margin-top: 0px;
  }
`;

export const H1Text = styled.h1`
  font-size: 60px;
  line-height: 70px;
  margin: 35px 0;
  color: #fff;

  @media screen and (max-width: 960px) {
    font-size: 40px;
    line-height: 50px;
    margin: 25px 0;
  }

  @media screen and (max-width: 540px) {
    font-size: 30px;
  }
`;

export const PText = styled.p`
  color: lightgray;
  font-style: italic;
  font-size: 20px;

  @media screen and (max-width: 540px) {
    font-size: 18px;
  }
`;

export const HeroButton = styled.button`
  display: inline-block;
  background: #000;
  color: #fff;
  font-size: 18px;
  padding: 13px 30px;
  margin: 30px 0;
  border: 1px solid #fff;
  transition: 0.5s ease;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #0c0c0c;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 540px) {
    font-size: 16px;
    padding: 10px 25px;
  }
`;
