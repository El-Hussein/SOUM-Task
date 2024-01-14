import {
  GetHomeCategories,
  GetHomeCategoriesError,
  GetHomeCategoriesSuccess,
  RegularReduxAction,
} from '@app-types';
import {createActionHelper} from '@utils/action.helpers';
import {GET_HOME_CATEGORIES} from './homeCategories.ACTION_TYPES';

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
