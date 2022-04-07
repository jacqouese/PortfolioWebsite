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

const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lng');

if (langParam !== 'en' && langParam !== 'pl') {
  urlParams.set('lng', 'en');
  const url = window.location.href.split('?')[0];
  window.location.href = url + '?' + urlParams.toString();
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  lng: langParam,
  keySeperator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
