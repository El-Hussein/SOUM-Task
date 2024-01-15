import {
  GetHomeCategories,
  GetHomeCategoriesError,
  GetHomeCategoriesSuccess,
  RegularReduxAction,
  SetSelectedCategory,
} from '@app-types';
import {createActionHelper} from '@utils/action.helpers';
import {
  GET_HOME_CATEGORIES,
  SET_SELECTED_CATEGORY,
} from './homeCategories.ACTION_TYPES';

export const setSelectedCategory: SetSelectedCategory = createActionHelper(
  SET_SELECTED_CATEGORY,
  'categoryId',
);

export const getHomeCategories: GetHomeCategories = createActionHelper(
  GET_HOME_CATEGORIES.ACTION,
);

export const getHomeCategoriesPending: RegularReduxAction = createActionHelper(
  GET_HOME_CATEGORIES.PENDING,
);

export const getHomeCategoriesSuccess: GetHomeCategoriesSuccess =
  createActionHelper(GET_HOME_CATEGORIES.SUCCESS, 'response');

export const getHomeCategoriesError: GetHomeCategoriesError =
  createActionHelper(GET_HOME_CATEGORIES.ERROR, 'error');
