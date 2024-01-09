import React from "react";
import footer_logo from "../Assets/Assets/logo_big.png";
import "./Footer.css";
import insta from "../Assets/Assets/instagram_icon.png";
import pintester from "../Assets/Assets/pintester_icon.png";
import wats from "../Assets/Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={insta} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester} alt="" />
        </div>{" "}
        <div className="footer-icons-container">
          <img src={wats} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
