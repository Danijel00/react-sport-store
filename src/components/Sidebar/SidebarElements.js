import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  /* top: 0; */
  left: 0;
  transition: all 300ms ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "100%")};
  z-index: 100;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  transition: all 200ms ease-in-out;

  &:hover {
    color: crimson;
    transition: all 200ms ease-in-out;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(11, 60px);
  text-align: center;

  @media screen and (max-width: 540px) {
    grid-template-rows: repeat(11, 45px);
  }

  @media screen and (max-width: 420px) {
    grid-template-rows: repeat(11, 35px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none;
  transition: 200ms ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: crimson;
    transition: 200ms ease-in-out;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

export const SidebarCart = styled.img`
  position: relative;
  margin-left: 15px;

  @media screen and (max-width: 400px) {
    width: 50px;
  }
`;

export const SidebarNumber = styled.span`
  position: relative;
  padding: 1px 3px;
  top: -2.5rem;
  right: -0.5rem;
  border-radius: 50%;
  font-weight: 600;
  font-size: 18px;
  color: crimson;
  background: #fff;
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  font-weight: 500;
  background: crimson;
  color: #fff;
  padding: 16px 64px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 200ms ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 200ms ease-in-out;
    background: #fff;
    color: #000;
  }

  @media screen and (max-width: 420px) {
    font-size: 15px;
    padding: 13px 45px;
  }
`;
