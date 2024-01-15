import {HTTP_REQUEST_STATE_ENUM, HomeOffersState} from '@app-types';
import {createReducer} from '@utils/createReducer';
import handlers from './homeOffersReducer.handlers';

const initialState: HomeOffersState = {
  state: HTTP_REQUEST_STATE_ENUM.IDLE,
  offerIds: [],
  selectedOfferId: 0,
};

export default createReducer(initialState, handlers);
