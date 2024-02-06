import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import i18n from 'i18next'

i18n
.use(Backend)
.use(initReactI18next)
.use(LanguageDetector)
.init({
	interpolation: { escapeValue: false },
	lng: 'en',
	fallbackLng: 'en',
    debug: true,
})

export default i18n