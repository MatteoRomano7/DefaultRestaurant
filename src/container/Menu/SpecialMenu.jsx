import React from "react";
import { motion } from "framer-motion";
import { motionProps, motionPropsNeg } from "../../constants/motionProps";
import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";


const SpecialMenu = () => (
  <div className="appSpecialMenu flexCenter sectionPadding" id="menu">
    <motion.div {...motionProps}>
    <div className="appSpecialMenu-title">      
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="appSpecialMenu-menu">
      <div className="appSpecialMenu-menu_wine  flexCenter">
        <p className="appSpecialMenu-menu_heading">Wine & Beer</p>
        <div className="appSpecialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
              />
            ))}
        </div>
      </div>

      <div className="appSpecialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="appSpecialMenu-menu_cocktails  flexCenter">
        <p className="appSpecialMenu-menu_heading">Cocktails</p>
        <div className="appSpecialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
            key={cocktail.title + index}
            title={cocktail.title}
            price={cocktail.price}
            tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="customButton">
        View More
      </button>
    </div>
          </motion.div>
  </div>
);

export default SpecialMenu;
