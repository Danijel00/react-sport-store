import React from "react";
import {
  CartIcon,
  CartNumber,
  Logo,
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarStyle";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo
              to="/"
              src={require("../../images/header/sportcenterlogo.png").default}
            />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-90}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="products"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-90}
              >
                Products
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="facility"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-90}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="testimonial"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-90}
              >
                Testimonial
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="footer"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-90}
              >
                Contact
              </NavLinks>
            </NavItem>
            <NavItem>
              <CartIcon
                to="cart"
                src={require("../../images/header/shopping-cart.png").default}
              />
              <CartNumber>0</CartNumber>
            </NavItem>
          </NavMenu>
          <NavBtn>
             <NavBtnLink to="/signin">Sign-In</NavBtnLink>     
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
