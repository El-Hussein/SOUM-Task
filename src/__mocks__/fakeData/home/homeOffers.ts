import {iphone15Black128} from '@__mocks__/separated-offers';
import {GET_HOME_OFFERS} from '@actions/ACTION_TYPES';
import {HTTP_REQUEST_STATE_ENUM} from '@app-types';
import {FakeRootState} from '@app-types/RootState';

export const pendGetHomeOffersActionFake = {
  type: GET_HOME_OFFERS.PENDING,
  payload: {},
};

export const successGetHomeOffersActionFake = {
  type: GET_HOME_OFFERS.SUCCESS,
  payload: {
    response: {data: [iphone15Black128]},
  },
};

export const failGetHomeOffersActionFake = {
  type: GET_HOME_OFFERS.ERROR,
  payload: {
    error: 'Error',
  },
};

export const getHomeOffersApiFakeSuccessResponse = Promise.resolve({
  data: [iphone15Black128],
});

export const fakeStateWithHomeOffersState: FakeRootState = {
  entities: {
    offers: {},
  },
  UI: {
    home: {
      offers: {
        offerIds: [],
        state: HTTP_REQUEST_STATE_ENUM.IDLE,
      },
    },
  },
};
