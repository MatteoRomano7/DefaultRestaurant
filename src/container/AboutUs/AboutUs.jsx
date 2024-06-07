import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="appAboutUs appBackground flexCenter sectionPadding"
    id="about"
  >
    <div className="appAboutUs-overlay flexCenter">
      
    </div>

    <div className="appAboutUs-content flexCenter">
      <div className="appAboutUs-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p_opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
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
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button type="button" className="customButton">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
