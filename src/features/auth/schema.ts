import { Regex } from '@/common/constants';
import { FORM_VALIDATION } from '@/common/constants';
import yup from '@/plugins/yup';

const emailSchema = yup.string().required().matches(Regex.EMAIL);
const passwordSchema = yup
  .string()
  .required()
  .min(FORM_VALIDATION.passwordMinLength)
  .max(FORM_VALIDATION.textMaxLength);

export const loginWithPasswordSchema = yup.object({
  email: emailSchema,
  password: passwordSchema.matches(Regex.PASSWORD),
});

export const createPasswordSChema = yup.object({
  password: passwordSchema.matches(Regex.PASSWORD, {
    message: 'auth.verifyRegistration.validate.passwordNotMatches',
  }),
  confirmPassword: yup
    .string()
    .required()
    .oneOf(
      [yup.ref('password')],
      'auth.verifyRegistration.validate.confirmPasswordNotMatches',
    ),
  code: yup.string().required(),
  email: emailSchema,
});

export const changePasswordSchema = yup.object({
  oldPassword: passwordSchema.matches(Regex.PASSWORD, {
    message: 'auth.verifyRegistration.validate.passwordNotMatches',
  }),
  password: passwordSchema.matches(Regex.PASSWORD, {
    message: 'auth.verifyRegistration.validate.passwordNotMatches',
  }),
  confirmNewPassword: yup
    .string()
    .required()
    .oneOf(
      [yup.ref('password')],
      'auth.verifyRegistration.validate.confirmPasswordNotMatches',
    ),
});

export const forgotPasswordSchema = yup.object({
  email: emailSchema,
});
