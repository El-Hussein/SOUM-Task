import { combineReducers } from 'redux';
import { appRequestQueue } from './appRequestQueue';

const global = combineReducers({
  appRequestQueue,
});

export default global;
