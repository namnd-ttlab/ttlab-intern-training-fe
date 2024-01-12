import commonEn from "@common/locales/en/common.locale";
import commonJa from "@common/locales/ja/common.locale";
import error from "@features/error/locales";
import product from "@features/product/locales";
import { yupLocale } from "@plugins/yup/locale";

const resources = {
  en: {
    translation: {
      common: commonEn,
      yup: yupLocale.localeEn,
      error: error.en,
      product: product.en,
    },
  },
  ja: {
    translation: {
      common: commonJa,
      yup: yupLocale.localeJa,
      error: error.ja,
      product: product.ja,
    },
  },
};

export default resources;
