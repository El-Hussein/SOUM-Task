import {
  GetCategoriesHTTPErrorResponse,
  GetCategoriesHTTPSuccessResponse,
} from '@app-types/services';
import {Category} from '@app-types/state';

export type GetHomeCategoriesActionData = {
  type: string;
  payload: {};
};

export type GetHomeCategories = () => GetHomeCategoriesActionData;

export type GetHomeCategoriesError = (
  error: GetCategoriesHTTPErrorResponse,
) => {
  type: string;
  payload: {
    error: GetCategoriesHTTPErrorResponse;
  };
};

export type GetHomeCategoriesSuccess = (
  response: GetCategoriesHTTPSuccessResponse,
) => {
  type: string;
  payload: {
    data: any;
  };
};
