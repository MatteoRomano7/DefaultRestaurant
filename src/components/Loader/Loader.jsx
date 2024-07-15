import React from "react";
import "../Loader/Loader.css";
import spinner from "../../assets/azale.png";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <img src={spinner} alt="Flower Bar Logo" className="loader-logo" />
      </div>
    </div>
  );
};

export default Loader;
