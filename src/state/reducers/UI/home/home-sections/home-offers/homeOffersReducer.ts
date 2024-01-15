import {HTTP_REQUEST_STATE_ENUM, HomeOffersState} from '@app-types';
import {createReducer} from '@utils/createReducer';
import handlers from './homeOffersReducer.handlers';

export const initialState: HomeOffersState = {
  state: HTTP_REQUEST_STATE_ENUM.IDLE,
  offerIds: [],
};

export default createReducer(initialState, handlers);
