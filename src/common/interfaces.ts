import { AxiosResponse } from "axios";
import { HttpStatus, OrderDirection, SupportLanguage } from "./constants";

export interface ILoginUser {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface IAppState {
  currentLanguage: SupportLanguage;
}

export interface IErrorItem {
  key: string;
  message: string;
  errorCode: HttpStatus;
  order?: number;
}

export interface IBodyResponse<T> extends AxiosResponse {
  success: boolean;
  code: HttpStatus;
  isRequestError?: boolean;
  message: string;
  data: T;
  errors?: IErrorItem[];
  errorCode?: string;
}

export interface ICommonListQuery {
  page?: number;
  limit?: number;
  orderBy?: string;
  orderDirection?: OrderDirection;
  keyword?: string;
}

export interface IGetListResponse<T> {
  items: T[];
  totalItems: number;
}

export interface ISorter {
  field?: string;
  order: string | null;
  columnKey: string;
}
