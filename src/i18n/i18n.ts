import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.ts";
import de from "./de.ts";

export const resources = {
  en: en,
  de: de,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    defaultNS: "shared",
    lng: "en",
    fallbackLng: "en",
    debug: true,

    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["em"],
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
