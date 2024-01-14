import {
  GetHomeOffers,
  GetHomeOffersError,
  GetHomeOffersSuccess,
  RegularReduxAction,
} from '@app-types';
import {createActionHelper} from '@utils/action.helpers';
import {GET_HOME_OFFERS} from './homeOffers.ACTION_TYPES';

export const getHomeOffers: GetHomeOffers = createActionHelper(
  GET_HOME_OFFERS.ACTION,
  'productId',
);

export const getHomeOffersPending: RegularReduxAction = createActionHelper(
  GET_HOME_OFFERS.PENDING,
);

export const getHomeOffersSuccess: GetHomeOffersSuccess = createActionHelper(
  GET_HOME_OFFERS.SUCCESS,
  'response',
);

export const getHomeOffersError: GetHomeOffersError = createActionHelper(
  GET_HOME_OFFERS.ERROR,
  'error',
);
