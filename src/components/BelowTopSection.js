import React from 'react';
import { useTranslation } from 'react-i18next';

import ProfileImg from '../assets/profileImg.png'
import {ReactComponent as ShapeRight} from '../assets/shape2.svg'

function BelowTopSection() {
  const { t, i18n } = useTranslation('translations');

  return (
    <div className="below-top-section">
      <div className="below-top-inner">
        <div className="below-top-image">
          <img src={ProfileImg} alt="" />
        </div>
        <div className="below-top-text">
          <h1>{t('belowTop.1')}</h1>
          <p>{t('belowTop.2')}</p>
        </div>
      </div>
    </div>
  );
}

export default BelowTopSection;
