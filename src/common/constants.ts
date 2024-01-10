/* eslint-disable no-useless-escape */
export enum LOCAL_STORAGE_KEY {
  LOGIN_USER = "loginUser",
  CURRENT_LANGUAGE = "currentLanguage",
}

export enum PageRouter {
  NOT_FOUND = "/404",
  FORBIDDEN = "/forbidden",
  PRODUCT = "/product",
}

export enum SupportLanguage {
  EN = "en",
  JA = "ja",
}

export const DEFAULT_LANGUAGE = SupportLanguage.EN;

export const REGEX = {
  EMAIL: /^[\w+-\.]+@([\w-]+\.)+[\w-]{1,255}$/,
};

export enum HttpStatus {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  ITEM_NOT_FOUND = 444,
  ITEM_ALREADY_EXIST = 445,
  ITEM_INVALID = 446,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
  NETWORK_ERROR = 502,
}

export enum OrderDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export const enum AntdOrderDirection {
  ASC = 'ascend',
  DESC = 'descend',
}

export const INPUT_TEXT_MAX_LENGTH = 255; // max length for input text
export const INPUT_TEXT_MIN_LENGTH = 5; // min length for input text
export const INPUT_TEXT_AREA_MAX_LENGTH = 2000; // max length for input text area
