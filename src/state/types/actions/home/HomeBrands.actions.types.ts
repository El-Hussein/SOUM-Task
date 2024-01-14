import {
  GetBrandsHTTPErrorResponse,
  GetBrandsHTTPSuccessResponse,
} from '@app-types';

export type GetHomeBrandsActionData = {
  type: string;
  payload: {
    categoryId: number;
  };
};

export type GetHomeBrands = (categoryId: number) => GetHomeBrandsActionData;

export type GetHomeBrandsError = (error: GetBrandsHTTPErrorResponse) => {
  type: string;
  payload: {
    error: GetBrandsHTTPErrorResponse;
  };
};

export type GetHomeBrandsSuccess = (response: GetBrandsHTTPSuccessResponse) => {
  type: string;
  payload: {
    data: any;
  };
};
