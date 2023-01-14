import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import './Header.scss';

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div 
      whileInView={{x:[-100,0], opacity: [0,1]}}
      transition={{duration:0.5}}
      className='app__header-info'
      >
        <div>
          <div className="app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p>Hello, I am</p>
              <h1>Micael</h1>
            </div>
          </div>
          <div className="app__flex">
            <p>Web Developer</p>
            <p>Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
      className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
      className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
            <div className="app__flex">
                <img src={circle} alt="profile_bg" />
            </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
