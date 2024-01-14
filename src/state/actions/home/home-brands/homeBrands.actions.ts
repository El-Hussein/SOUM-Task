import {
  GetHomeBrands,
  GetHomeBrandsError,
  GetHomeBrandsSuccess,
  RegularReduxAction,
} from '@app-types';
import {createActionHelper} from '@utils/action.helpers';
import {GET_HOME_BRANDS} from './homeBrands.ACTION_TYPES';

export const getHomeBrands: GetHomeBrands = createActionHelper(
  GET_HOME_BRANDS.ACTION,
  'categoryId',
);

export const getHomeBrandsPending: RegularReduxAction = createActionHelper(
  GET_HOME_BRANDS.PENDING,
);

export const getHomeBrandsSuccess: GetHomeBrandsSuccess = createActionHelper(
  GET_HOME_BRANDS.SUCCESS,
  'response',
);

export const getHomeBrandsError: GetHomeBrandsError = createActionHelper(
  GET_HOME_BRANDS.ERROR,
  'error',
);
