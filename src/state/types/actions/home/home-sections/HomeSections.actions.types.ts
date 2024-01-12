import {
  GetHomeSectionHTTPSuccessResponse,
  GetHomeSectionHTTPErrorResponse,
  HTTP_REQUEST_STATE_ENUM,
} from '@app-types';

export type GetHomeSectionSuccess = (
  response: GetHomeSectionHTTPSuccessResponse,
) => {
  type: string;
  payload: {
    response: GetHomeSectionHTTPSuccessResponse;
  };
};

export type GetHomeSectionError = (error: GetHomeSectionHTTPErrorResponse) => {
  type: string;
  payload: {
    error: GetHomeSectionHTTPErrorResponse;
  };
};

export type UpdateHomeSectionState = (
  sectionId: number,
  state: HTTP_REQUEST_STATE_ENUM,
) => {
  type: string;
  payload: {
    sectionId: number;
    state: HTTP_REQUEST_STATE_ENUM;
  };
};
