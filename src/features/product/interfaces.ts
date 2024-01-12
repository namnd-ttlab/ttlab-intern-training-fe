import { ICommonListQuery } from "@common/interfaces";

export interface IProduct {
  id: string;
  name: string;
  address: string;
  tags: string[];
}

export interface IProductState {
  productList: IProduct[];
  isLoading: boolean;
  totalItems: number;
  getListQuery: ICommonListQuery;
}
