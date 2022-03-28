import React from 'react';
import { motion } from 'framer-motion';

import skills from '../data/skills';

function TechnologiesSection({ offsetY }) {

  return (
    <div className="TechnologiesSection">
      <motion.h1
        className="h1-outline"
        style={{ transform: `translateX(${offsetY * 0.2 - 200}px)` }}
      >
        Technologies <br />
        I'm familiar with
      </motion.h1>
      <motion.div
        className="skills-container"
        transition={{ duration: 1 }}
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
      >
        {skills.map((skill) => (
          <div className="skills-column">
            <div className="skill-parent">
              <motion.div
               transition={{ duration: 0.5, delay: 0.2 }}
               initial={{ translateY: -80, opacity: 0 }}
               whileInView={{ translateY: 0, opacity: 1 }}
              >
                <i class={skill.icon}></i>
                <h3>{skill.name}</h3>
              </motion.div>
            </div>
            {skill.children.map((child) => (
              <div className="skill-child">
                <h4 className="font-ligher">{child}</h4>
                <button className="skill-button">></button>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default TechnologiesSection;
