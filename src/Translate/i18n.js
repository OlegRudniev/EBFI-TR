// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './En.json';
import translationRU from './Tr.json';

const resources = {
    en: {
        translation: translationEN
    },
    tr: {
        translation: translationRU
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
