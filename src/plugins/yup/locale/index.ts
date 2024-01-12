/* eslint-disable @typescript-eslint/no-explicit-any */
import { defaultLocale } from 'yup';
import { localeJa } from './ja';
import { localeEn } from './en';

const {
  mixed: mixedLocale,
  string: stringLocale,
  number: numberLocale,
  date: dateLocale,
  boolean: booleanLocale,
  object: objectLocale,
  array: arrayLocale,
} = defaultLocale;

export const yupLocale = {
  localeJa,
  localeEn,
};

const mixed: typeof mixedLocale = {
  default: (data: any) => {
    return `yup.mixed.default|${JSON.stringify(data)}`;
  },
  required: (data: any) => {
    return `yup.mixed.required|${JSON.stringify(data)}`;
  },
  defined: (data: any) => {
    return `yup.mixed.defined|${JSON.stringify(data)}`;
  },
  oneOf: (data: any) => {
    return `yup.mixed.oneOf|${JSON.stringify(data)}`;
  },
  notOneOf: (data: any) => {
    return `yup.notOneOf|${JSON.stringify(data)}`;
  },
  notType: (data: any) => {
    return data.type !== 'mixed'
      ? `yup.mixed.notType|${JSON.stringify(data)}`
      : `yup.mixed.notTypeMixed|${JSON.stringify(data)}`;
  },
};

const string: typeof stringLocale = {
  length: (data: any) => {
    return `yup.string.length|${JSON.stringify(data)}`;
  },
  min: (data: any) => {
    return `yup.string.min|${JSON.stringify(data)}`;
  },
  max: (data: any) => {
    return `yup.string.max|${JSON.stringify(data)}`;
  },
  matches: (data: any) => {
    return `yup.string.matches|${JSON.stringify(data)}`;
  },
  email: (data: any) => {
    return `yup.string.email|${JSON.stringify(data)}`;
  },
  url: (data: any) => {
    return `yup.string.url|${JSON.stringify(data)}`;
  },
  uuid: (data: any) => {
    return `yup.string.uuid|${JSON.stringify(data)}`;
  },
  trim: (data: any) => {
    return `yup.string.trim|${JSON.stringify(data)}`;
  },
  lowercase: (data: any) => {
    return `yup.string.lowercase|${JSON.stringify(data)}`;
  },
  uppercase: (data: any) => {
    return `yup.string.uppercase|${JSON.stringify(data)}`;
  },
};

const number: typeof numberLocale = {
  min: (data: any) => {
    return `yup.number.min|${JSON.stringify(data)}`;
  },
  max: (data: any) => {
    return `yup.number.max|${JSON.stringify(data)}`;
  },
  lessThan: (data: any) => {
    return `yup.number.lessThan|${JSON.stringify(data)}`;
  },
  moreThan: (data: any) => {
    return `yup.number.moreThan|${JSON.stringify(data)}`;
  },
  positive: (data: any) => {
    return `yup.number.positive|${JSON.stringify(data)}`;
  },
  negative: (data: any) => {
    return `yup.number.negative|${JSON.stringify(data)}`;
  },
  integer: (data: any) => {
    return `yup.number.integer|${JSON.stringify(data)}`;
  },
};

const date: typeof dateLocale = {
  min: (data: any) => {
    return `yup.date.min|${JSON.stringify(data)}`;
  },
  max: (data: any) => {
    return `yup.date.max|${JSON.stringify(data)}`;
  },
};

const boolean: typeof booleanLocale = {
  isValue: (data: any) => {
    return `yup.boolean.isValue|${JSON.stringify(data)}`;
  },
};

const object: typeof objectLocale = {
  noUnknown: (data: any) => {
    return `yup.object.noUnknown|${JSON.stringify(data)}`;
  },
};

const array: typeof arrayLocale = {
  min: (data: any) => {
    return `yup.array.min|${JSON.stringify(data)}`;
  },
  max: (data: any) => {
    return `yup.array.max|${JSON.stringify(data)}`;
  },
  length: (data: any) => {
    return `yup.array.length|${JSON.stringify(data)}`;
  },
};

export default {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
};
