import {appRequestQueue as appRequestQueueReducer} from '.';
import {
  DECREMENT_APP_REQUEST_QUEUE,
  INCREMENT_APP_REQUEST_QUEUE,
} from '@actions/global/appRequestQueue/ACTION_TYPES';

describe('app requests queue reducer', () => {
  it('should return the initial state', () => {
    expect(
      appRequestQueueReducer(undefined, {type: 'INVALID_ACTION', payload: {}}),
    ).toEqual({
      numberOfRunningRequests: 0,
    });
  });

  it('should increment number of running requests on dispatching INCREMENT_APP_REQUEST_QUEUE', () => {
    expect(
      appRequestQueueReducer(
        {
          numberOfRunningRequests: 0,
        },
        {type: INCREMENT_APP_REQUEST_QUEUE, payload: {}},
      ),
    ).toEqual({
      numberOfRunningRequests: 1,
    });
  });

  it('should decrement number of running requests on dispatching INCREMENT_APP_REQUEST_QUEUE', () => {
    expect(
      appRequestQueueReducer(
        {
          numberOfRunningRequests: 1,
        },
        {type: DECREMENT_APP_REQUEST_QUEUE, payload: {}},
      ),
    ).toEqual({
      numberOfRunningRequests: 0,
    });
  });
});
