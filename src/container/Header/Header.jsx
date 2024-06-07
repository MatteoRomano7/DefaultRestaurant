import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="appHeader appWrapper sectionPadding" id="home">
    <div className="appWrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="appHeader-h1">The Key To Fine Dining</h1>
      <p className="p_opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{" "}
      </p>
      <button type="button" className="customButton">
        Explore Menu
      </button>
    </div>

    <div className="appWrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
