import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';
import githubImg from '../assets/github.png';
import { AnimatePresence, motion } from 'framer-motion';
import { SvgBlob } from 'react-svg-blob';

function SingleProject() {
    const { t, i18n } = useTranslation('translations');
    const { id } = useParams();

    const [buttonName, setButtonName] = useState(t('projects.2.1'));

    const projectIndex = projects.findIndex((elem) => elem.id == id);

    const project = projects[projectIndex];

    const changeButtonName = () => {
        setTimeout(() => {
            setButtonName('See live');
        }, 2000);
    };

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className="single-project-page">
            <div className="single-project-top-container">
                <motion.div
                    className="single-project-top-inner"
                    style={{ backgroundColor: project.colors.primary }}
                    initial={{
                        width: 1020,
                        height: 440,
                        translateY: 'calc(50vh - 220px)',
                    }}
                    animate={{ width: window.innerWidth, height: 570, translateY: 0 }}
                    transition={{ delay: 0.5, duration: 1.2, ease: 'anticipate' }}
                >
                    <div className="single-project-top-full-width">
                        <motion.div
                            className="project-container-text"
                            style={{ transformOrigin: 'left center' }}
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.2 }}
                            transition={{ delay: 0.5, duration: 1.2, ease: 'anticipate' }}
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
                                <motion.button
                                    className="project-button"
                                    style={{ backgroundColor: project.colors.darker }}
                                    animate={{
                                        opacity: [1, 0, 0, 1, 1, 1, 1],
                                        scale: [1, 1, 1, 1, 1.3, 1],
                                        translateX: [0, -20, -50, 0, 0, 0, 0],
                                    }}
                                    transition={{ duration: 1.8, delay: 1.5, ease: 'anticipate' }}
                                    onClick={() => {}}
                                    onAnimationStart={changeButtonName}
                                >
                                    {buttonName}
                                </motion.button>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    className="project-button"
                                    style={{ backgroundColor: project.colors.darker }}
                                >
                                    <img src={githubImg} alt="" className="icon-img" />
                                    {t('projects.2.2')}
                                </a>
                            </div>
                        </motion.div>
                        <div className="project-container-image">
                            <AnimatePresence>
                                <motion.img
                                    src={project.image}
                                    alt=""
                                    className="project-img"
                                    initial={{ scale: 1.02 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.7, duration: 0.5 }}
                                />
                            </AnimatePresence>

                            <div className="blob-img">
                                <SvgBlob
                                    variant="solid"
                                    color={project.colors.lighter}
                                    shapeProps={{ size: 14, growth: 10, edges: 17 }}
                                />
                            </div>
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
                <div className="single-project-description-inner">
                    <div className="project-video-container">
                        <motion.video
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            className="project-video"
                            controls
                        >
                            <source src={`/imgs/vid${project.id}.mp4`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </motion.video>
                    </div>
                </div>
                <div className="single-project-description-inner">
                    <hr />
                    <div>
                        <h2>{t('singleProject.2')}</h2>
                        <p
                            className="color-lighter"
                            dangerouslySetInnerHTML={{
                                __html: project.description.technical[i18n.language],
                            }}
                        ></p>
                    </div>
                    <hr />
                    <div>
                        <h2>{t('singleProject.3.1')}</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <p className="color-lighter">{t('singleProject.3.2.1')}</p>
                                {project.description.additional[i18n.language].languages.map((language) => (
                                    <p>{language}</p>
                                ))}
                            </div>
                            <div>
                                <p className="color-lighter">{t('singleProject.3.2.2')}</p>
                                {project.description.additional[i18n.language].platforms.map((platform) => (
                                    <p>{platform}</p>
                                ))}
                            </div>
                            <div>
                                <p className="color-lighter">{t('singleProject.3.2.3')}</p>
                                {project.description.additional[i18n.language].categories.map((category) => (
                                    <p>{category}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="single-project-bottom-container"
                style={{ backgroundColor: project.colors.primary }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: 'easeIn' }}
            >
                <div className="single-project-bottom-inner">
                    <img src={`/imgs/projectImgs/s${project.id}-1.png`} alt="" />
                    <img src={`/imgs/projectImgs/s${project.id}-2.png`} alt="" />
                    <img src={`/imgs/projectImgs/s${project.id}-3.png`} alt="" />
                </div>
            </motion.div>
        </div>
    );
}

export default SingleProject;
