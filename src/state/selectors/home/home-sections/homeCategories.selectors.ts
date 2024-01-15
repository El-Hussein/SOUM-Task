import {Category, HTTP_REQUEST_STATE_ENUM} from '@app-types';
import {RootState} from '@app-types/RootState';
import {createSelector} from 'reselect';

export const selectCategories = createSelector(
  (state: RootState) => state.entities.categories,
  (state: RootState) => state.UI.home.categories.categoryIds,
  (categories, categoryIds) => {
    const categoriesArray: Category[] = [];
    categoryIds?.forEach(id => {
      if (categories[id]) {
        categoriesArray.push(categories[id]);
      }
    });
    return categoriesArray;
  },
);

export const selectSelectedCategoryId = createSelector(
  (state: RootState) => state.UI.home.categories.selectedCategoryId,
  selectedCategoryId => selectedCategoryId,
);

export const selectLoadingCategories = createSelector(
  (state: RootState) => state.UI.home.categories.state,
  state => state === HTTP_REQUEST_STATE_ENUM.PENDING,
);
