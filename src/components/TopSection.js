import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { ReactComponent as MainSvg } from '../assets/mainImg.svg';
import { useTranslation } from 'react-i18next';

function TopSection({ offsetY }) {
  const { t, i18n } = useTranslation('translations');

  return (
    <div className="top-section">
      <div className="top-section-inner">
        <div
          className="top-section-text-container"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <motion.h1
            className="h1-larger"
            animate={{ translateY: [40, 0], opacity: [0, 1] }}
            transition={{ duration: 0.4 }}
          >
            {t('top.1.1')}{' '}
            <span className="span-primary-color">{t('top.1.2')}</span>
          </motion.h1>
          <motion.h1
            animate={{ translateY: [40, 0], opacity: [0, 1] }}
            transition={{ delay: 0.2, duration: 0.4 }}
            style={{ fontWeight: '300' }}
          >
            {t('top.2.1')} <br />
            <span className="span-primary-color">{t('top.2.2')}</span>{' '}
            {t('top.2.3')}
          </motion.h1>
          <motion.div
            className="top-section-button-container"
            animate={{ translateX: [-40, 0], opacity: [0, 1] }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button>{t('top.3.1')}</button>
            <button className="secondary">{t('top.3.2')}</button>
          </motion.div>
        </div>
        <div
          className="top-section-image-container"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <MainSvg />
        </div>
      </div>
    </div>
  );
}

export default TopSection;
