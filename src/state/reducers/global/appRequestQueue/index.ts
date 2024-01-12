
import { AppRequestQueueState } from '../../../../types';
import { createReducer } from '../../../../utils/createReducer';
import handlers from './handlers';

const initialState: AppRequestQueueState = {
  numberOfRunningRequests: 0,
};

export const appRequestQueue = createReducer(initialState, handlers);
