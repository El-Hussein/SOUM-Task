import {appleBrand} from '@__mocks__/separated-brands';
import {GET_HOME_BRANDS, SET_SELECTED_BRAND} from '@actions/ACTION_TYPES';

export const pendGetHomeBrandsActionFake = {
  type: GET_HOME_BRANDS.PENDING,
  payload: {},
};

export const successGetHomeBrandsActionFake = {
  type: GET_HOME_BRANDS.SUCCESS,
  payload: {
    response: {data: [appleBrand]},
  },
};

export const failGetHomeBrandsActionFake = {
  type: GET_HOME_BRANDS.ERROR,
  payload: {
    error: 'Error',
  },
};

export const selectBrandActionFake = {
  type: SET_SELECTED_BRAND,
  payload: {
    brandId: 1,
  },
};
