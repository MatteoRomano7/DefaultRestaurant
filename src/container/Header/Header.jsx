import React from "react";
import { motion } from "framer-motion";
import { motionProps, motionPropsNeg } from "../../constants/motionProps";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="appHeader appWrapper sectionPadding" id="home">
    <div className="appWrapper_info">
    <motion.div {...motionPropsNeg}>
      <SubHeading title="Chase the new flavour" />
      <h1 className="appHeader-h1">Join Us at <br /> Azale Flower Bar</h1>
      <p className="p_opensans" style={{ margin: "2rem 0" }}>
        Our bar is more than just a place to drink; it's a community where you can unwind, connect, and enjoy a unique atmosphere. Founded with the vision of blending contemporary design with a welcoming environment, we strive to create memorable experiences for all our guests.
      </p>
  </motion.div>
      <button type="button" className="customButton">
        Explore Menu
      </button>
    </div>

    
    <div className="appWrapper_img">
      <motion.div {...motionProps}>
        <img src={images.welcome} alt="header_img" />
      </motion.div>
    </div>
  </div>
);

export default Header;
