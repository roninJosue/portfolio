import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import {es, en} from './locales'

const options = {
  interpolation: {
    escapeValue: false
  },
  debug: false,
  resources: {
    en: {
      common: en
    },
    es: {
      common: es
    }
  },
  fallbackLng: 'en',
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
  .init(options);

export default i18n