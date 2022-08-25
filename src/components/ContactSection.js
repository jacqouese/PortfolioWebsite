import React from 'react';
import { motion } from 'framer-motion';

import { ReactComponent as EnvelopeIcon } from '../assets/envelope.svg';
import { ReactComponent as ShapeLeft } from '../assets/shape1.svg';
import { ReactComponent as ShapeRight } from '../assets/shape2.svg';
import GithubIcon from '../assets/github.png';
import { useTranslation } from 'react-i18next';

function ContactSection({ offsetY }) {
    const triggerEnvelopeAnimation = () => {
        document.querySelector('.svg-envelope').classList.add('animate');
    };

    const { t, i18n } = useTranslation('translations');

    return (
        <div className="contact-section">
            <div className="contact-section-title">
                <div>
                    <motion.h1 className="h1-outline" style={{ transform: `translateX(${offsetY * 0.2 - 1350}px)` }}>
                        {t('contact.1')}
                    </motion.h1>
                </div>
            </div>
            <motion.div className="contact-inner" whileInView={() => triggerEnvelopeAnimation}>
                <div className="contact-inner-wrapper">
                    <div className="shape-right">
                        <ShapeRight />
                    </div>
                    <div className="contact-svg">
                        <EnvelopeIcon />
                    </div>
                    <div className="contact-text">
                        <h2>{t('contact.2')}</h2>
                        <h3>{t('contact.3')}</h3>
                        <div>
                            <p>jakub003@proton.me</p>
                            <a href="https://github.com/jacqouese" target="_blank">
                                <span>
                                    <img src={GithubIcon} alt="" style={{ maxWidth: 20, filter: 'invert(100%)' }} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default ContactSection;
