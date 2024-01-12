import { HomeSection } from '@app-types/state';

export interface GetHomeSectionHTTPSuccessResponse {
  data: HomeSection[];
}

export interface GetHomeSectionHTTPErrorResponse {
  error: any;
}