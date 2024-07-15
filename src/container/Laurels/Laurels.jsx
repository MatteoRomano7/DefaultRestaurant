import React from "react";
import { motion } from "framer-motion";
import { motionProps, motionPropsNeg } from "../../constants/motionProps";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="appLaurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="appLaurels_awards-card_content">
      <p className="p_cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p_opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <motion.div {...motionProps}>
  <div className="appBackground appWrapper sectionPadding" id="awards">
    <div className="appWrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="appLaurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="appWrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
  </motion.div>
);

export default Laurels;
