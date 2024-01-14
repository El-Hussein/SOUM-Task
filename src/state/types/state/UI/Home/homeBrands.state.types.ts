import {HTTP_REQUEST_STATE_ENUM} from '@app-types/common';

export interface HomeBrandsState {
  state: HTTP_REQUEST_STATE_ENUM;
  brandIds: number[];
  selectedBrandId: number;
}
