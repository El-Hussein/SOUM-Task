import {Category} from '@app-types';
import {RootState} from '@app-types/RootState';

export const selectCategories = (state: RootState): Category[] => {
  const allCategories = state.entities.categories;
  const categoryIds = state.UI.home.categories.categoryIds;
  const categories: Category[] = [];
  categoryIds?.forEach(id => {
    if (allCategories[id]) {
      categories.push(allCategories[id]);
    }
  });
  return categories;
};
