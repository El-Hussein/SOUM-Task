import {
  INCREMENT_APP_REQUEST_QUEUE,
  DECREMENT_APP_REQUEST_QUEUE,
} from '../../../../actions/global/appRequestQueue/ACTION_TYPES';
import {AppRequestQueueState} from '../../../../../types/global/appRequestQueue';

const appRequestQueueHandlers = {
  [INCREMENT_APP_REQUEST_QUEUE]: (draftState: AppRequestQueueState) => {
    draftState.numberOfRunningRequests += 1;
  },
  [DECREMENT_APP_REQUEST_QUEUE]: (draftState: AppRequestQueueState) => {
    draftState.numberOfRunningRequests -= 1;
  },
};

export default appRequestQueueHandlers;
