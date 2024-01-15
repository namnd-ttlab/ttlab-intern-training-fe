import { app, common } from '@/common/locale';
import error from '@/features/errors/locale';
import { yupEn } from '../yup/locale/en/en';
import { yupFieldsEn } from '../yup/locale/en/fields.en';
import { yupFieldsVi } from '../yup/locale/vi/fields.vi';
import { yupVi } from '../yup/locale/vi/vi';
import auth from '@/features/auth/locale';

const messages = {
  vi: {
    app: app.vi,
    common: common.vi,
    yup: yupVi,
    yupFields: yupFieldsVi,
    error: error.vi,
    auth: auth.vi
  },
  en: {
    app: app.en,
    common: common.en,
    yup: yupEn,
    yupFields: yupFieldsEn,
    error: error.en,
    auth: auth.en

  },
};

export default messages;
