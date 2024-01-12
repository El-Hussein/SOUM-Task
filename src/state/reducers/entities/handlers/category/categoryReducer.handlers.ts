import { ON_NEW_CATEGORIES } from '@actions/ACTION_TYPES';
import { Category, EntitiesState } from '@app-types';
import { normalize } from 'normalizr';
import { categoriesSchema } from './category.schema';

export default {
  [ON_NEW_CATEGORIES]: (
    draftState: EntitiesState,
    { categories }: { categories: Category[] },
  ) => {
    const { entities } = normalize(categories, categoriesSchema);
    draftState.categories = {
      ...draftState.categories,
      ...(entities.categories as { [key: string]: Category }),
    };
  },
};
