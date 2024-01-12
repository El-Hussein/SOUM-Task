import { RootState } from '../../../../types';

export const selectNumberOfRequests = (state: RootState) =>
  state.global.appRequestQueue.numberOfRunningRequests;
