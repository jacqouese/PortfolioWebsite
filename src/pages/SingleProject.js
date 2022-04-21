import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';
import githubImg from '../assets/github.png'
import { motion } from 'framer-motion';
import { SvgBlob } from 'react-svg-blob';

function SingleProject() {
    const { t, i18n } = useTranslation('translations');
    const { id } = useParams();

    const projectIndex = projects.findIndex(elem => elem.id == id);

    const project = projects[projectIndex];

    useEffect(() => {
        window.scrollTo({top: 0});
    }, [])

    return (
        <div className="single-project-page">
            <div className="single-project-top-container">
               <motion.div 
                    className="single-project-top-inner"
                    style={{ backgroundColor: project.colors.primary }}
                    initial={{ width: 1020, height: 440, translateY: 'calc(50vh - 220px)' }}
                    animate={{ width: window.innerWidth, height: 550, translateY: 0 }}
                    transition={{ delay: 0.5, duration: 1.2, ease: 'anticipate' }}
               >
                    <div className="project-container-text">
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
                        >
                            {t('projects.2.1')}
                        </button>
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
                    </div>
                    <div className="project-container-image">
                        <motion.img
                        src={project.image}
                        alt=""
                        className="project-img"
                        initial={{ scale: 1.02 }}
                        animate={{ scale: 1 }}
                        transition={{delay: 0.7, duration: 0.5}}
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
            </div>
            <motion.div 
                className="single-project-description" 
                initial={{ opacity: 0, translateY: -10 }} 
                animate={{ opacity: 1, translateY: 0 }} 
                transition={{ delay: 1.2, duration: 0.5, ease: 'easeIn' }}
            >
                <div>
                    <h3>Description</h3>
                    <p
                        className="font-smaller"
                        dangerouslySetInnerHTML={{
                            __html: project.subtitle[i18n.language],
                        }}
                    ></p>
                    <hr />
                    <h3>Technical details</h3>
                    <p
                        className="font-smaller"
                        dangerouslySetInnerHTML={{
                            __html: project.subtitle[i18n.language],
                        }}
                    ></p>
                    <hr />
                    <h3>Other information</h3>
                    <p
                        className="font-smaller"
                        dangerouslySetInnerHTML={{
                            __html: project.subtitle[i18n.language],
                        }}
                    ></p>
                </div>
            </motion.div>
            <motion.div 
                className="single-project-bottom-container" 
                style={{ backgroundColor: project.colors.primary }}
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1.2, duration: 0.5, ease: 'easeIn' }}
            >

            </motion.div>
        </div>
    )
}

export default SingleProject