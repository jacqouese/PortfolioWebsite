import React from 'react';
import { motion } from 'framer-motion';

import skills from '../data/skills';
import { useTranslation } from 'react-i18next';
import { convertToDashes } from '../helpers/helpers';

function TechnologiesSection({ offsetY }) {
  const { t } = useTranslation('translations');

  return (
    <div className="technologies-section">
      <motion.h1
        className="h1-outline"
        style={{ transform: `translateX(${offsetY * 0.2 - 200}px)` }}
      >
        {t('technologies.1.1')} <br />
        {t('technologies.1.2')}
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
                <a
                  href={`https://github.com/jacqouese?tab=repositories&q=${convertToDashes(
                    child
                  )}`}
                  target="_blank"
                >
                  <button className="skill-button">></button>
                </a>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default TechnologiesSection;
