import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { motionProps } from "../../constants/motionProps";
import "./AboutUs.css";


const AboutUs = () => (
  <div
  className="appAboutUs appBackground flexCenter sectionPadding"
  id="about"
  >
    <motion.div {...motionProps}>
    <div className="appAboutUs-overlay flexCenter">
      
    </div>

    <div className="appAboutUs-content flexCenter">
      <div className="appAboutUs-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p_opensans">
          Welcome to our modern bar, a place where you can unwind and enjoy a unique atmosphere. Founded in 2020, we strive to provide the best experience for our guests with a wide selection of drinks and a cozy environment.
        </p>
        <button type="button" className="customButton">
          Know More
        </button>
      </div>

      <div className="appAboutUs-content_knife flexCenter">
      <img src={images.azale} alt="G_overlay" />
      </div>

      <div className="appAboutUs-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p_opensans">
          Since our inception in 2020, we have been dedicated to creating a modern bar experience. Our journey began with a vision to blend contemporary design with a welcoming atmosphere, making us a favorite spot for locals and visitors alike.
        </p>
        <button type="button" className="customButton">
          Know More
        </button>
      </div>
    </div>
    </motion.div>
  </div>
);

export default AboutUs;
