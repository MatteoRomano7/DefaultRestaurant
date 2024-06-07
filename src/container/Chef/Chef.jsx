import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="appBackground appWrapper sectionPadding">
    <div className="appWrapper_img appWrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="appWrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="appChef-content">
        <div className="appChef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p_opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="p_opensans">
          {" "}
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.{" "}
        </p>
      </div>

      <div className="appChef-sign">
        <p>Kevin Luo</p>
        <p className="p_opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
