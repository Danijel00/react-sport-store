import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";


const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>EXTRAS</FooterLinkTitle>
              <FooterLink to="/">Brands</FooterLink>
              <FooterLink to="/">Gift Certificates</FooterLink>
              <FooterLink to="/">Affiliate</FooterLink>
              <FooterLink to="/">Special</FooterLink>
              <FooterLink to="/">Site Map</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>INFORMATION</FooterLinkTitle>
              <FooterLink to="/">About Us</FooterLink>
              <FooterLink to="/">Privacy Policy</FooterLink>
              <FooterLink to="/">Terms & Condition</FooterLink>
              <FooterLink to="/">Contact Us</FooterLink>
              <FooterLink to="/">Site Map</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>INFORMATION</FooterLinkTitle>
              <FooterLink hover="false" to="/">
                My Account
              </FooterLink>
              <FooterLink hover="false" to="/">
                Order History
              </FooterLink>
              <FooterLink hover="false" to="/">
                Wish List
              </FooterLink>
              <FooterLink hover="false" to="/">
                Newsletter
              </FooterLink>
              <FooterLink hover="false" to="/">
                Returns
              </FooterLink>
            </FooterLinksItems>
            <FooterLinksItems hover="false">
              <FooterLinkTitle>CONTACT US</FooterLinkTitle>
              <FooterLink hover="false" to="/">
                3665 Creekside Lane, Ventura California 93004
              </FooterLink>
              <FooterLink hover="false" to="/">
                random.email@email.com
              </FooterLink>
              <FooterLink hover="false" to="/">
                949-292-1252
              </FooterLink>
              <FooterLink hover="false" to="/">
                3665 s Creekside Lane
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              {/*Year will update automatically*/}
              Sport Center © {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
