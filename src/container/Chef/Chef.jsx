import React from "react";
import { motion } from "framer-motion";
import { motionProps, motionPropsNeg } from "../../constants/motionProps";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="appBackground appWrapper sectionPadding">
    <div className="appWrapper_img appWrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="appWrapper_info">
     <motion.div {...motionProps}>
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="appChef-content">
        <div className="appChef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p_opensans">
            "Cooking is an art, but mixology is a science."
          </p>
        </div>
        <p className="p_opensans">
          "As a chef, I believe in the importance of experimenting with mixology. It allows us to create unique and memorable experiences for our guests. The perfect blend of flavors can elevate any dish and make it unforgettable."
        </p>
     </div>

      <div className="appChef-sign">
        <p>Kevin Luo</p>
        <p className="p_opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </motion.div>
    </div>
  </div>
);

export default Chef;
