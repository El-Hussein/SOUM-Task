import {createActionHelper} from '../../../../utils/action.helpers';
import {
  DecrementAppRequestQueueAction,
  IncrementAppRequestQueueAction,
} from '../../../../types/global/appRequestQueue';
import {
  INCREMENT_APP_REQUEST_QUEUE,
  DECREMENT_APP_REQUEST_QUEUE,
} from './ACTION_TYPES';

export const incrementAppRequestQueue: () => IncrementAppRequestQueueAction =
  createActionHelper(INCREMENT_APP_REQUEST_QUEUE);
export const decrementAppRequestQueue: () => DecrementAppRequestQueueAction =
  createActionHelper(DECREMENT_APP_REQUEST_QUEUE);
