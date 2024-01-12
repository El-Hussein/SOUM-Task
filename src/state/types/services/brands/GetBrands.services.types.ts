import { Brand } from '@app-types';

export interface GetBrandsHTTPSuccessResponse {
  data: Brand[];
}

export interface GetBrandsHTTPErrorResponse {
  error: any;
}
