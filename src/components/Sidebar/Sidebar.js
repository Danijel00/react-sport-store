import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrap,
  SidebarCart,
  SidebarNumber,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="about">Home</SidebarLink>
          <SidebarLink onClick={toggle} to="discover">Products</SidebarLink>
          <SidebarLink onClick={toggle} to="services">About</SidebarLink>
          <SidebarLink onClick={toggle} to="signup">Testimonial</SidebarLink>
          <SidebarLink onClick={toggle} to="signup">Contact</SidebarLink>
          <SidebarLink onClick={toggle} to="cart">
            <SidebarCart src={
                  require("../../images/header/shopping-cart.png").default
                } />
          <SidebarNumber>0</SidebarNumber>
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign-In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>  
    </SidebarContainer>
  );
};

export default Sidebar;
