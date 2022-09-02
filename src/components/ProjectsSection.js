import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SvgBlob } from 'react-svg-blob';

import githubImg from '../assets/github.png';
import projects from '../data/projects';

function ProjectsSection({ offsetY }) {
    const { t, i18n } = useTranslation('translations');
    const navigate = useNavigate();

    const imgScale = {
        initial: { scale: 0 },
        hovering: { scale: 1.02 },
    };

    const handleNavigation = (id) => {
        // scroll clicked element into the center
        document.getElementById(`project${id}`).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });

        // set opacity to 0 for every element but the clicked
        const elems = document.querySelectorAll('.project-container-wrapper');
        elems.forEach((elem) => {
            if (elem.id != `project${id}`) {
                setTimeout(() => {
                    elem.style.opacity = '0';
                }, 500);
            }
        });

        // navigate to page
        setTimeout(() => {
            navigate(`project/${id}?lng=${i18n.language}`);
        }, 720);
    };

    return (
        <div className="projects-section" id="projects-section">
            <motion.h1 className="h1-outline" style={{ transform: `translateX(-${offsetY * 0.2 - 200}px)` }}>
                {t('projects.1')}
            </motion.h1>
            {projects.map((project, i) => (
                <motion.div
                    className="project-container-wrapper"
                    id={`project${project.id}`}
                    style={{ backgroundColor: project.colors.primary }}
                    key={i}
                    transition={{ duration: 0.5 }}
                    initial={[{ translateY: 50, opacity: 0 }, 'initial']}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    viewport={{ margin: '0px 0px -200px 0px', once: true }}
                    whileHover="hovering"
                >
                    <motion.div className="project-container-absolute-background" />
                    <motion.div className="project-container">
                        <motion.div
                            className="project-container-text"
                            transition={{ duration: 0.4, delay: 0.1 }}
                            initial={{ translateY: -50, opacity: 0 }}
                            whileInView={{ translateY: 0, opacity: 1 }}
                            viewport={{ margin: '0px 0px -220px 0px', once: true }}
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
                                {project.technologies.map((technology, j) => (
                                    <span key={j} style={{ backgroundColor: project.colors.lighter }}>
                                        {technology}
                                    </span>
                                ))}
                            </div>
                            <div className="project-container-buttons">
                                <button
                                    className="project-button"
                                    style={{ backgroundColor: project.colors.darker }}
                                    onClick={() => handleNavigation(project.id)}
                                >
                                    {t('projects.2.1')}
                                </button>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-button"
                                    style={{ backgroundColor: project.colors.darker }}
                                >
                                    <img src={githubImg} alt="" className="icon-img" />
                                    {t('projects.2.2')}
                                </a>
                            </div>
                        </motion.div>
                        <div className="project-container-image">
                            <motion.img
                                src={project.image}
                                alt=""
                                transition={{ duration: 0.4, delay: 0.1 }}
                                initial={{ opacity: 0, translateY: 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
                                viewport={{ margin: '0px 0px -190px 0px', once: true }}
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
                </motion.div>
            ))}
        </div>
    );
}

export default ProjectsSection;
