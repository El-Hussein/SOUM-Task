import {phonesCategory} from '@__mocks__/separated-categories';
import {
  GET_HOME_CATEGORIES,
  SET_SELECTED_CATEGORY,
} from '@actions/ACTION_TYPES';
import {HTTP_REQUEST_STATE_ENUM} from '@app-types';
import {FakeRootState} from '@app-types/RootState';

export const pendGetHomeCategoriesActionFake = {
  type: GET_HOME_CATEGORIES.PENDING,
  payload: {},
};

export const successGetHomeCategoriesActionFake = {
  type: GET_HOME_CATEGORIES.SUCCESS,
  payload: {
    response: {data: [phonesCategory]},
  },
};

export const failGetHomeCategoriesActionFake = {
  type: GET_HOME_CATEGORIES.ERROR,
  payload: {
    error: 'Error',
  },
};

export const selectCategoryActionFake = {
  type: SET_SELECTED_CATEGORY,
  payload: {
    categoryId: 1,
  },
};

export const getHomeCategoriesApiFakeSuccessResponse = Promise.resolve({
  data: [phonesCategory],
});

export const fakeStateWithHomeCategoriesState: FakeRootState = {
  entities: {
    categories: {},
  },
  UI: {
    home: {
      categories: {
        state: HTTP_REQUEST_STATE_ENUM.IDLE,
        categoryIds: [],
        selectedCategoryId: 0,
      },
    },
  },
};
