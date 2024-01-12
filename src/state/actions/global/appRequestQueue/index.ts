import { createActionNew } from '../../../../utils/action.helpers';
import {
  DecrementAppRequestQueueAction,
  IncrementAppRequestQueueAction,
} from '../../../../types/global/appRequestQueue';
import {
  INCREMENT_APP_REQUEST_QUEUE,
  DECREMENT_APP_REQUEST_QUEUE,
} from './ACTION_TYPES';

export const incrementAppRequestQueue: () => IncrementAppRequestQueueAction =
  createActionNew(INCREMENT_APP_REQUEST_QUEUE);
export const decrementAppRequestQueue: () => DecrementAppRequestQueueAction =
  createActionNew(DECREMENT_APP_REQUEST_QUEUE);
