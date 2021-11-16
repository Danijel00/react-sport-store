import React from "react";
import "./SocialLinks.css";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

function SocialLinks() {
  return (
      <div className="brands">
        <div className="small-container">
          <h1 className="title">Socialize</h1>
          <div className="row">
            <div className="col-5 social-media">
              <AiOutlineInstagram className="ig"/>
            </div>
            <div className="col-5 social-media">
              <AiFillTwitterCircle className="tw"/>
            </div>
            <div className="col-5 social-media">
              <FaFacebookSquare className="fb"/>
            </div>
            <div className="col-5 social-media">
              <FaYoutube className="yt"/>
            </div>
            <div className="col-5 social-media">
              <BsLinkedin className="li"/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SocialLinks;
