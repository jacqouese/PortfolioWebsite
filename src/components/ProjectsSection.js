import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SvgBlob } from 'react-svg-blob';
import githubImg from '../assets/github.png';

import projects from '../data/projects';
import { useTranslation } from 'react-i18next';

function ProjectsSection({ offsetY }) {
  const { t, i18n } = useTranslation('translations');

  const imgScale = {
    initial: { scale: 0 },
    hovering: { scale: 1.02 },
  }

  return (
    <div className="projects-section">
      <motion.h1
        className="h1-outline"
        style={{ transform: `translateX(-${offsetY * 0.2 - 200}px)` }}
      >
        {t('projects.1')}
      </motion.h1>
      <AnimatePresence>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-container"
            style={{ backgroundColor: project.colors.primary }}
            transition={{ duration: 0.7 }}
            initial={[{ translateY: 100, opacity: 0, perspective: 3000 }, 'initial']}
            whileInView={{ translateY: 0, opacity: 1, perspective: 3000 }}
            viewport={{ margin: '0px 0px -200px 0px', once: true }}
            whileHover="hovering"
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="project-container-text"
              transition={{ duration: 0.6, delay: 0.1 }}
              initial={{ translateY: -100, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              viewport={{ margin: '0px 0px -200px 0px', once: true }}
            >
              <h1>{project.name}</h1>
              <p>{project.title[i18n.language]}</p>
              <p
                className="font-smaller"
                dangerouslySetInnerHTML={{
                  __html: project.subtitle[i18n.language],
                }}
              ></p>
              <div className="project-technologies-container">
                {project.technologies.map((technology) => (
                  <span style={{ backgroundColor: project.colors.lighter }}>
                    {technology}
                  </span>
                ))}
              </div>
              <div className="project-container-buttons">
                <a
                  href="#"
                  className="project-button"
                  style={{ backgroundColor: project.colors.darker }}
                >
                  {t('projects.2.1')}
                </a>
                <a
                  href={project.url}
                  target="_blank"
                  className="project-button"
                  style={{ backgroundColor: project.colors.darker }}
                > 
                  <img src={githubImg} alt="" className="icon-img"/>
                  {t('projects.2.2')}
                </a>
              </div>
            </motion.div>
            <div className="project-container-image">
              <motion.img
                src={project.image}
                alt=""
                transition={{ duration: 0.6, delay: 0.1 }}
                initial={{ opacity: 0, translateY: 100, scale: 0.95 }}
                whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
                viewport={{ margin: '0px 0px -180px 0px', once: true }}
                className="project-img"
                variants={imgScale}
              />

              <div className="blob-img">
                <SvgBlob
                  variant="solid"
                  color={project.colors.lighter}
                  shapeProps={{ size: 14, growth: 10, edges: 17 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ProjectsSection;
