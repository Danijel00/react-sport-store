import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 99;
  margin-top: -50px;

  @media screen and (max-width: 960px) {
    transition: all 800ms ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;
`;

export const NavLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  margin-left: 24px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    margin-left: -10px;
  }
`;

export const Logo = styled.img`
  object-fit: contain;
  padding: 3px 35px 0 0;
  margin-bottom: -15px;
  width: 140px;
  cursor: pointer;
  align-items: center;
  z-index: 999;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -25px;

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  position: relative;
  padding: 1rem 0 0.2rem;
  margin-right: 30px;
  text-transform: uppercase;
  transition: all 500ms ease-in-out;
  font-weight: 500;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    top: 100%;
    left: 0;
    background-color: crimson;
    transition: transform 800ms;
    transform: scaleX(0);
    transform-origin: left;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export const NavItem = styled.li`
  height: 40px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  background: crimson;
  white-space: nowrap;
  padding: 10px 22px;
  margin-top: 10px;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  outline: none;
  border: 1px solid crimson;
  transition: all 200ms ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 200ms ease-in-out;
    background: transparent;
    border: 1px solid crimson;
  }
`;

export const CartIcon = styled.img`
  object-fit: contain;
  width: 50px;
  cursor: pointer;
  align-items: center;
  margin-right: 40px;
  padding: 3px 8px 0 0;
  z-index: 999;
`;

export const CartNumber = styled.div`
  color: #fff;
  display: inline-block;
  position: relative;
  text-align: center;
  align-items: center;
  font-weight: 600;
  top: -30%;
  right: 20%;
  transform: translate(-100%, -100%);
  padding: 1px 5px;
  background: #ff6666;
  border-radius: 50%;
`;
