import {
  GetCategoriesHTTPErrorResponse,
  GetCategoriesHTTPSuccessResponse,
} from '@app-types/services';

export type SetSelectedCategoryActionData = {
  type: string;
  payload: {
    categoryId: number;
  };
};

export type SetSelectedCategory = (
  categoryId: number,
) => SetSelectedCategoryActionData;

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
