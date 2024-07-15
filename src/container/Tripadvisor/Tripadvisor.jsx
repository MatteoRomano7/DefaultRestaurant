import React, { useEffect } from "react";
import "./Tripadvisor.css";
import { motion } from "framer-motion";
import { motionProps, motionPropsNeg } from "../../constants/motionProps";
import { SubHeading, MenuItem } from "../../components";


const Tripadvisor = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.dataset.useServiceCore = "";
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="appGallery flexCenter">
      <motion.div {...motionProps}>
    <div className="appGallery-content">
    <SubHeading title="TripAdvisor" />
        <h1 className="headtext__cormorant">Recensioni</h1>
    
    <div className="appAboutUs appBackground flexCenter sectionPadding" id="about"
        style={{ fontFamily: 'Open Sans, sans-serif'}}>

      <div
        className="elfsight-app-c08b1302-f2bb-404d-b434-7caad16ed405"
        data-elfsight-app-lazy
        
      ></div>

    </div>
    </div>
    </motion.div>
    </div>
    
  );
};

export default Tripadvisor;