import {HTTP_REQUEST_STATE_ENUM} from '@app-types/common';

export interface HomeOffersState {
  state: HTTP_REQUEST_STATE_ENUM;
  offerIds: number[];
}
