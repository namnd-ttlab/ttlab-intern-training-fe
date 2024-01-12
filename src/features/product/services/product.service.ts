import axiosService from "@/plugins/axios";
import { ApiService } from "@/plugins/axios/api";
import {
  IBodyResponse,
  ICommonListQuery,
  IGetListResponse,
} from "@common/interfaces";
import { IProduct } from "../interfaces";

class ProductService extends ApiService {
  getList(queryString: ICommonListQuery) {
    return this._getList(queryString) as Promise<
      IBodyResponse<IGetListResponse<IProduct>>
    >;
  }
}

export const productService = new ProductService(
  { baseUrl: "product" },
  axiosService
);
