import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="appFooter sectionPadding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="appFooter-links">
      <div className="appFooter-links_contact">
        <h1 className="appFooter-headtext">Contact Us</h1>
        <p className="p_opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p_opensans">+1 212-344-1230</p>
        <p className="p_opensans">+1 212-555-1230</p>
      </div>

      <div className="appFooter-links_logo">
        <img src={images.azale} alt="footer_logo" />
        <p className="p_opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="appFooter-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="appFooter-links_work">
        <h1 className="appFooter-headtext">Working Hours</h1>
        <p className="p_opensans">Monday-Friday:</p>
        <p className="p_opensans">08:00 am - 12:00 am</p>
        <p className="p_opensans">Saturday-Sunday:</p>
        <p className="p_opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footerCopyright">
      <p className="p_opensans">2024 Azale Flower Bar. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
