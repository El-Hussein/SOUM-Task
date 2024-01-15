import {appleBrand} from '@__mocks__/separated-brands';
import {GET_HOME_BRANDS, SET_SELECTED_BRAND} from '@actions/ACTION_TYPES';
import {HTTP_REQUEST_STATE_ENUM} from '@app-types';
import {FakeRootState} from '@app-types/RootState';

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

export const getHomeBrandsApiFakeSuccessResponse = Promise.resolve({
  data: [appleBrand],
});

export const fakeStateWithHomeBrandsState: FakeRootState = {
  entities: {
    brands: {},
  },
  UI: {
    home: {
      brands: {
        brandIds: [],
        selectedBrandId: 0,
        state: HTTP_REQUEST_STATE_ENUM.IDLE,
      },
    },
  },
};
