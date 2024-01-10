import commonEn from "@common/locales/en/common.locale";
import commonJa from "@common/locales/ja/common.locale";
import error from "@features/error/locales";
import { yupLocale } from "@plugins/yup/locale";

const resources = {
  en: {
    translation: {
      common: commonEn,
      yup: yupLocale.localeEn,
      error: error.en,
    },
  },
  ja: {
    translation: {
      common: commonJa,
      yup: yupLocale.localeJa,
      error: error.ja,
    },
  },
};

export default resources;
