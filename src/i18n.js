import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import pl from './locales/pl.json';

const resources = {
  en: {
    translations: en,
  },
  pl: {
    translations: pl,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',
  keySeperator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
