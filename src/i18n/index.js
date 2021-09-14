import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import {es, en} from './locales'

const options = {
  interpolation: {
    escapeValue: false
  },
  debug: true,
  resources: {
    es: {
      common: es
    },
    en: {
      common: en
    },
  },
  fallbackLng: 'es',
  ns: ['common'],
  defaultNS: 'common',
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  },
};

i18n
  .use(LanguageDetector)
  .init(options)
  .changeLanguage('es', (err, t) => {
    if(err) return console.log('something went wrong loading', err)
  });

export default i18n