import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import mainImg from '../assets/mainImg.svg';

function TopSection({ offsetY }) {
  return (
    <div className="top-section">
      <div className="top-section-text-container" style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
        <motion.h1
          animate={{ translateY: [40, 0], opacity: [0, 1] }}
          className="h1-larger"
        >
          Hi, I'm <span className="span-primary-color">Jakub</span>
        </motion.h1>
        <motion.h1
          className="h2-larger"
          animate={{ translateY: [40, 0], opacity: [0, 1] }}
          transition={{ delay: 0.2 }}
        >
          I'm a self-taught <br />
          <span className="span-primary-color">full-stack</span> developer
        </motion.h1>
        <motion.div
          className="top-section-button-container"
          animate={{ translateY: [40, 0], opacity: [0, 1] }}
          transition={{ delay: 0.4 }}
        >
          <button>My projects</button>
          <button className="secondary">Contact me</button>
        </motion.div>
      </div>
      <div className="top-section-image-container" style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
        <img src={mainImg} alt="" />
      </div>
    </div>
  );
}

export default TopSection;
