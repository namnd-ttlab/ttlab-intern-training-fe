import { Regex } from './../../common/constants';

declare module 'yup' {
  interface StringSchema {
    isPhone(): StringSchema;
    isEmail(): StringSchema;
    isAlphaNumeric(): StringSchema;
    hasNoSpecialCharacters(regex?: Regex): StringSchema;
  }
}
