import {SET_SELECTED_CATEGORY} from '@actions/ACTION_TYPES';
import {HomeCategoriesState} from '@app-types';

export default {
  [SET_SELECTED_CATEGORY]: (
    draftStart: HomeCategoriesState,
    {categoryId}: {categoryId: number},
  ) => {
    draftStart.selectedCategoryId = categoryId;
  },
};
