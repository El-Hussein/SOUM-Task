import {HTTP_REQUEST_STATE_ENUM, HomeProductsState} from '@app-types';
import {createReducer} from '@utils/createReducer';
import handlers from './handlers';

const initialState: HomeProductsState = {
  state: HTTP_REQUEST_STATE_ENUM.IDLE,
  productIds: [],
  selectedProductIds: [],
};

export default createReducer(initialState, handlers);
