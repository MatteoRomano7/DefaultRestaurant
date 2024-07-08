import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="appGallery flexCenter">
      <div className="appGallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p_opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Follow us on Instagram @azaleflowerbar for the latest updates and stunning photos of our bar.
        </p>
        <button type="button" className="customButton">
          View More
        </button>
      </div>
      <div className="appGallery-images">
        <div className="appGallery-images_container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="appGallery-images_card flexCenter"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              <BsInstagram className="galleryImage-icon" />
            </div>
          ))}
        </div>
        <div className="appGallery-images_arrows">
          <BsArrowLeftShort
            className="galleryArrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="galleryArrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
