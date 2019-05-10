const i18n = require("i18next")
// import XHR from "i18next-xhr-backend"
// import axios from "axios"
// import Backend from "i18next-node-fs-backend"
const LanguageDetector = require("i18next-browser-languagedetector")
const { initReactI18next } = require("react-i18next")

i18n
  //   .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    whitelist: ["en", "fr"],
    resources: {
      en: {
        translations: {
          heading: "Shwmae, bonjour, and hola!",
          description:
            "Available in English, Welsh, French, and Spanish, with more translations coming soon. doopoll is great for local, multi-lingual, and global organisations.",
        },
      },
      fr: {
        translations: {
          heading: "Hello world",
          description:
            "Available in English, Welsh, French, and Spanish, with more translations coming soon. doopoll is great for local, multi-lingual, and global organisations.",
        },
      },
    },
    // backend: {
    //   ajax: axios,
    // },
    fallbackLng: "en",

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    // debug: true,
    react: {
      await: true,
      useSuspense: false,
    },
  })

export default i18n
