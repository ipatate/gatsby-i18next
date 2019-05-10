// import XHR from "i18next-xhr-backend"
// import axios from "axios"
const i18n = require("i18next")
// import Backend from "i18next-node-fs-backend"
const LanguageDetector = require("i18next-browser-languagedetector")
const { initReactI18next } = require("react-i18next")
// const isBrowser = typeof window !== "undefined"

i18n
  //   .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    whitelist: ["en", "fr"],
    resources: {
      en: {
        translations: require("../locales/en/translations.json"),
      },
      fr: {
        translations: require("../locales/fr/translations.json"),
      },
    },
    // backend: {
    //   ajax: axios,
    // },
    fallbackLng: "en",

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    debug: true,
    react: {
      await: true,
      useSuspense: false,
    },
  })

export default i18n
