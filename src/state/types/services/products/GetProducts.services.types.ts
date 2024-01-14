import {Product} from '@app-types';

export interface GetProductsHTTPSuccessResponse {
  data: Product[];
}

export interface GetProductsHTTPErrorResponse {
  error: any;
}

export type GetProductsAPI = (
  brandId: number,
) => Promise<GetProductsHTTPSuccessResponse | GetProductsHTTPErrorResponse>;
