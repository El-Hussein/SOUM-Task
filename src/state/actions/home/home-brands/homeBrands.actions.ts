import {
  GetHomeBrands,
  GetHomeBrandsError,
  GetHomeBrandsSuccess,
  RegularReduxAction,
  SetSelectedBrand,
} from '@app-types';
import {createActionHelper} from '@utils/action.helpers';
import {GET_HOME_BRANDS, SET_SELECTED_BRAND} from './homeBrands.ACTION_TYPES';

export const setSelectedBrand: SetSelectedBrand = createActionHelper(
  SET_SELECTED_BRAND,
  'brandId',
);

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
