import React from 'react';
import { useTranslation } from 'react-i18next';

function BelowTopSection() {
  const { t, i18n } = useTranslation('translations');

  return (
    <div className="below-top-section">
      <div className="below-top-inner">
        <h1>{t('belowTop.1')}</h1>
        <p>{t('belowTop.2')}</p>
      </div>
    </div>
  );
}

export default BelowTopSection;
