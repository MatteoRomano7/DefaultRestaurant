import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="appMenuItem">
    <div className="appMenuItem-head">
      <div className="appMenuItem-name">
        <p className="p_cormorant" style={{ color: "var(--color-azure)" }}>
          {title}
        </p>
      </div>
      <div className="appMenuItem-dash" />
      <div className="appMenuItem-price">
        <p className="p_cormorant">{price}</p>
      </div>
    </div>

    <div className="appMenuItem-sub">
      <p className="p_opensans" style={{ color: "#AAAAAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
