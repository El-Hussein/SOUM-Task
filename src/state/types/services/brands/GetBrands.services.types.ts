import {Brand} from '@app-types';

export interface GetBrandsHTTPSuccessResponse {
  data: Brand[];
}

export interface GetBrandsHTTPErrorResponse {
  error: any;
}

export type GetBrandsAPI = (
  categoryId: number,
) => Promise<GetBrandsHTTPSuccessResponse | GetBrandsHTTPErrorResponse>;
