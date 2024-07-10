import React, { useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { SubHeading } from "../../components";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  useEffect(() => {
    // Carica lo script Elfsight dopo che il componente Ã¨ stato montato
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.dataset.useServiceCore = "";
    script.defer = true;
    document.head.appendChild(script);

    // Pulizia: rimuovi lo script quando il componente viene smontato
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Esegui l'effetto solo una volta

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const openInstagramPopup = () => {
    window.open("https://www.instagram.com/azale_flowerbar/", "_blank", "width=800,height=600");
  };

  return (
    <div className="appGallery flexCenter">
      <div className="appGallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p_opensans" style={{ color: "#AAAAAA", marginTop: "2rem" }}>
          Follow us on Instagram @azaleflowerbar for the latest updates and
          stunning photos of our bar.
        </p>
        <button type="button" className="customButton" onClick={openInstagramPopup}>
        View More
      </button>
      </div>

      <div className="appGallery-images" ref={scrollRef}> {/* Applica il ref per lo scorrimento */}
        {/* Inserisci il codice del widget Elfsight */}
        <div 
          className="elfsight-app-6c39ce42-425f-43b0-ba58-2316ce2fff0f" 
          data-elfsight-app-lazy
          style={{ fontFamily: 'Open Sans, sans-serif' }}
        ></div>
      </div>

      {/* Frecce di scorrimento (lasciate invariate) */}
      <div className="appGallery-images_arrows">
        <BsArrowLeftShort className="galleryArrow-icon" onClick={() => scroll("left")} />
        <BsArrowRightShort className="galleryArrow-icon" onClick={() => scroll("right")} />
      </div>
    </div>
  );
};

export default Gallery;