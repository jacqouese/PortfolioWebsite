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
        transition={{ duration: 0.8 }}
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ margin: '0px 0px -200px 0px', once: true }}
      >
        {skills.map((skill) => (
          <div className="skills-column">
            <div className="skill-parent">
              <motion.div
                transition={{ duration: 0.4, delay: 0.2 }}
                initial={{ translateY: -80, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                viewport={{ margin: '0px 0px -200px 0px', once: true }}
              >
                <i class={skill.icon}></i>
                <h3>{skill.name}</h3>
              </motion.div>
            </div>
            {skill.children.map((child) => (
              <div className="skill-child">
                <h4 className="font-ligher">{child[0]}</h4>
                {child[1] !== '' ? (
                  <a
                    href={`https://github.com/jacqouese?tab=repositories&q=${child[1]}`}
                    target="_blank"
                  >
                    <button className="skill-button">></button>
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default TechnologiesSection;
