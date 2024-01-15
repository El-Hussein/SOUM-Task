import {Iphone15, Iphone15Pro} from '@__mocks__/separated-products';
import {
  GET_HOME_PRODUCTS,
  SET_SELECTED_PRODUCT,
  SELECT_ALL_PRODUCTS,
} from '@actions/ACTION_TYPES';

export const pendGetHomeProductsActionFake = {
  type: GET_HOME_PRODUCTS.PENDING,
  payload: {},
};

export const successGetHomeProductsActionFake = {
  type: GET_HOME_PRODUCTS.SUCCESS,
  payload: {
    response: {data: [Iphone15, Iphone15Pro]},
  },
};

export const failGetHomeProductsActionFake = {
  type: GET_HOME_PRODUCTS.ERROR,
  payload: {
    error: 'Error',
  },
};

export const selectProductActionFake = {
  type: SET_SELECTED_PRODUCT,
  payload: {
    productId: 1,
  },
};

export const selectProductActionFake2 = {
  type: SET_SELECTED_PRODUCT,
  payload: {
    productId: 2,
  },
};

export const selectAllProductsActionFake = {
  type: SELECT_ALL_PRODUCTS,
  payload: {},
};
