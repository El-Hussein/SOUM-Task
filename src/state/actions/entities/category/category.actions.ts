import {OnNewCategories} from '@app-types/actions';
import {createActionHelper} from '@utils/action.helpers';
import {ON_NEW_CATEGORIES} from './category.ACTION_TYPES';

export const onNewCategories: OnNewCategories = createActionHelper(
  ON_NEW_CATEGORIES,
  'categories',
);
