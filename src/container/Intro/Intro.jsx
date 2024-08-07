import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { motionProps, motionPropsNeg } from "../../constants/motionProps";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="appVideo">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="appVideo-overlay flexCenter">
      <motion.div {...motionPropsNeg}>
        <div
          className="appVideo-overlay_circle flexCenter"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default Intro;
