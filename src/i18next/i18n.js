import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Eng } from './Languages/Eng';
import { Tr } from './Languages/Tr';
import { Ru } from './Languages/Ru';
i18n



  .use(initReactI18next)

  .init({
  
    debug: true,
    fallbackLng: 'eng',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      eng: { translation : Eng },
      tr : {translation: Tr },
      ru : {translation : Ru}
    }
  });

export default i18n;