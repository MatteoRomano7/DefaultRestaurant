import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="appBackground appWrapper sectionPadding" id="contact">
    <div className="appWrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="appWrapper-content">
        <p className="p_opensans">
        Via Giuseppe Mazzini, 44, 80038 Pomigliano d'Arco NA
        </p>
        <p
          className="p_cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p_opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p_opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button
        type="button"
        className="customButton"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>

    <div className="appWrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
