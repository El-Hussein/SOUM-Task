import { HomeSectionState, HTTP_REQUEST_STATE_ENUM } from '@app-types';
import { createReducer } from '@utils/createReducer';
import handlers from './homeSectionReducer.handlers';

const initialState: HomeSectionState = {
  state: HTTP_REQUEST_STATE_ENUM.IDLE,
  stateOf: [],
  sections: [],
};

export default createReducer(initialState, handlers);
