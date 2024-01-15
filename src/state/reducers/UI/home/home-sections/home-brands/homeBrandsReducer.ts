import {HTTP_REQUEST_STATE_ENUM, HomeBrandsState} from '@app-types';
import {createReducer} from '@utils/createReducer';
import handlers from './handlers';

const initialState: HomeBrandsState = {
  state: HTTP_REQUEST_STATE_ENUM.IDLE,
  brandIds: [],
  selectedBrandId: 0,
};

export default createReducer(initialState, handlers);
