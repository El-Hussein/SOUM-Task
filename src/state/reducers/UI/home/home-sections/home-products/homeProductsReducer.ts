import {HTTP_REQUEST_STATE_ENUM, HomeProductsState} from '@app-types';
import {createReducer} from '@utils/createReducer';
import getHandlers from './homeProductsReducer.handlers';
import selectHandlers from './selectHomeProductReducer.handlers';

const initialState: HomeProductsState = {
  state: HTTP_REQUEST_STATE_ENUM.IDLE,
  productIds: [],
  selectedProductIds: [],
};

export default createReducer(initialState, {...getHandlers, ...selectHandlers});
