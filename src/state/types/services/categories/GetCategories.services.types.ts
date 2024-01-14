import {Category} from '@app-types';

export interface GetCategoriesHTTPSuccessResponse {
  data: Category[];
}

export interface GetCategoriesHTTPErrorResponse {
  error: any;
}

export type GetCategoriesAPI = () => Promise<
  GetCategoriesHTTPSuccessResponse | GetCategoriesHTTPErrorResponse
>;
