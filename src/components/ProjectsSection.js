import React from 'react';
import { motion } from 'framer-motion';
import { SvgBlob } from 'react-svg-blob';

import projects from '../data/projects';

function ProjectsSection({ offsetY }) {
  return (
    <div className="projects-section">
      <motion.h1
        className="h1-outline"
        style={{ transform: `translateX(-${offsetY * 0.2 - 200}px)` }}
      >
        My highlighted projects
      </motion.h1>
      {projects.map((project) => (
        <motion.div
          className="project-container"
          style={{ backgroundColor: project.colors.primary }}
          transition={{ duration: 1 }}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
        >
          <motion.div
            className="project-container-text"
            transition={{ duration: 0.9, delay: 0.1 }}
            initial={{ translateY: -100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
          >
            <h1>{project.name}</h1>
            <p>{project.title}</p>
            <p
              className="font-smaller"
              dangerouslySetInnerHTML={{ __html: project.subtitle }}
            ></p>
            <div className="project-technologies-container">
              {project.technologies.map((technology) => (
                <span style={{ backgroundColor: project.colors.lighter }}>
                  {technology}
                </span>
              ))}
            </div>
            <div>
              <a
                href="https://www.github.com"
                className="project-button"
                style={{ backgroundColor: project.colors.darker }}
              >
                Detailed info
              </a>
              <a
                href={project.url}
                target="_blank"
                className="project-button"
                style={{ backgroundColor: project.colors.darker }}
              >
                source code
              </a>
            </div>
          </motion.div>
          <div className="project-container-image">
            <motion.img
              src={project.image}
              alt=""
              transition={{ duration: 0.9, delay: 0.1 }}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              className="project-img"
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
    </div>
  );
}

export default ProjectsSection;
