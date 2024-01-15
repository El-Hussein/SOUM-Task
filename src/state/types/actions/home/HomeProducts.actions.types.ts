import {
  GetProductsHTTPErrorResponse,
  GetProductsHTTPSuccessResponse,
} from '@app-types/services';

export type SetSelectedProductActionData = {
  type: string;
  payload: {
    productId: number;
  };
};

export type SetSelectedProduct = (
  productId: number,
) => SetSelectedProductActionData;

export type GetHomeProductsActionData = {
  type: string;
  payload: {
    brandId: number;
  };
};

export type GetHomeProducts = (brandId: number) => GetHomeProductsActionData;

export type GetHomeProductsError = (error: GetProductsHTTPErrorResponse) => {
  type: string;
  payload: {
    error: GetProductsHTTPErrorResponse;
  };
};

export type GetHomeProductsSuccess = (
  response: GetProductsHTTPSuccessResponse,
) => {
  type: string;
  payload: {
    data: any;
  };
};
