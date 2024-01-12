import { AppEvent, emitter } from "@/plugins/mitt";
import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { isJson } from "@common/commonFunctions";
import { HttpStatus } from "@common/constants";
import { IBodyResponse } from "@common/interfaces";
import dayjs from "./../dayjs";

export const options: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  } as unknown as AxiosRequestHeaders,
  baseURL: import.meta.env.VITE_API_URL,
  responseType: "json",
};

const axiosInstance = axios.create(options);

axiosInstance.interceptors.request.use(async (config: any) => {
  //  check token expire
  // const accessToken = localStorageAuthService.getAccessToken();
  // const language = localStorageAuthService.getCurrentLanguage();
  Object.assign(config, {
    headers: {
      "X-Timezone": dayjs().format("Z"),
      "X-Timezone-Name": dayjs.tz.guess(),
      // "Accept-Language": language || SupportLanguage.EN,
      "Content-Type": "application/json",
      // Authorization: `Bearer ${accessToken}`,
      ...config.headers,
    },
  });
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (typeof response?.data === "string") {
      response.data = isJson(response.data) ? JSON.parse(response.data) : null;
    }
    response.data = {
      ...response?.data,
      success: true,
    };
    return response.data;
  },
  async (error) => {
    if (error.code === "ERR_NETWORK") {
      error.request.data = {
        ...(error?.request?.data || {}),
        success: false,
        isRequestError: true,
        message: error.message,
        code: HttpStatus.NETWORK_ERROR,
      };
      return error.request.data;
    } else if (error.response) {
      // check response 401 and logout
      if (error.response.status === HttpStatus.UNAUTHORIZED) {
        emitter.emit(AppEvent.LOGOUT);
      }

      // check response 403 and redirect Forbidden page
      if (error.response.status === HttpStatus.FORBIDDEN) {
        emitter.emit(AppEvent.FORBIDDEN);
      }

      if (typeof error?.response?.data === "string") {
        error.response.data = JSON.parse(error.response.data);
      }
      if (error?.response?.data) {
        error.response.data = {
          code: error?.response?.status,
          ...((error?.response?.data as object) || {}),
          success: false,
        };
      }

      return error.response.data as IBodyResponse<unknown>;
    } else if (error.request) {
      error.request.data = {
        ...(error?.request?.data || {}),
        success: false,
        isRequestError: true,
        message: error.message,
      };
      return error.request?.data;
    }
    return {
      ...error,
      config: error?.config as AxiosRequestConfig,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      statusText: "System error, please try again later",
      headers: error?.request?.headers || {},
      success: false,
      message: "System error, please try again later",
      data: null,
      code: HttpStatus.INTERNAL_SERVER_ERROR,
    };
  }
);

export default axiosInstance;
