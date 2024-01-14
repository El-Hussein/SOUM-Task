import {
  GetHomeProducts,
  GetHomeProductsError,
  GetHomeProductsSuccess,
  RegularReduxAction,
} from '@app-types';
import {createActionHelper} from '@utils/action.helpers';
import {GET_HOME_PRODUCTS} from './homeProducts.ACTION_TYPES';

export const getHomeProducts: GetHomeProducts = createActionHelper(
  GET_HOME_PRODUCTS.ACTION,
  'brandId',
);

export const getHomeProductsPending: RegularReduxAction = createActionHelper(
  GET_HOME_PRODUCTS.PENDING,
);

export const getHomeProductsSuccess: GetHomeProductsSuccess =
  createActionHelper(GET_HOME_PRODUCTS.SUCCESS, 'response');

export const getHomeProductsError: GetHomeProductsError = createActionHelper(
  GET_HOME_PRODUCTS.ERROR,
  'error',
);
