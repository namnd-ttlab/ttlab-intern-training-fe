import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {
  DEFAULT_LANGUAGE,
  LOCAL_STORAGE_KEY,
  SupportLanguage,
} from "../../common/constants";
import resources from "./resources";
import { yupFields } from "@plugins/yup/locale/field";

i18next.use(initReactI18next).init({
  fallbackLng: DEFAULT_LANGUAGE,
  lng:
    localStorage.getItem(LOCAL_STORAGE_KEY.CURRENT_LANGUAGE) ||
    DEFAULT_LANGUAGE,
  resources: resources,
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

i18next.services.formatter?.add("field", (value, lng) => {
  const fields = (yupFields?.[lng as unknown as SupportLanguage] ||
    {}) as Record<string, string>;
  value = value.replace(/\[\d+\]/g, "");

  return fields[value] || value;
});

export default i18next;
