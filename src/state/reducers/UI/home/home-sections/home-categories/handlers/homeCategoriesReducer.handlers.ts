import {GET_HOME_CATEGORIES} from '@actions/ACTION_TYPES';
import {
  GetCategoriesHTTPSuccessResponse,
  HTTP_REQUEST_STATE_ENUM,
  HomeCategoriesState,
} from '@app-types';

export default {
  [GET_HOME_CATEGORIES.PENDING]: (draftStart: HomeCategoriesState) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.PENDING;
  },
  [GET_HOME_CATEGORIES.SUCCESS]: (
    draftStart: HomeCategoriesState,
    {response}: {response: GetCategoriesHTTPSuccessResponse},
  ) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.SUCCESS;
    draftStart.categoryIds = response.data.map(category => category.categoryId);
    draftStart.selectedCategoryId =
      draftStart.categoryIds.length > 0 ? draftStart.categoryIds[0] : 0;
  },
  [GET_HOME_CATEGORIES.ERROR]: (draftStart: HomeCategoriesState) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.FAILURE;
  },
};
