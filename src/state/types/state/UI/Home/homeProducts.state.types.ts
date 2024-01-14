import {HTTP_REQUEST_STATE_ENUM} from '@app-types/common';

export interface HomeProductsState {
  state: HTTP_REQUEST_STATE_ENUM;
  productIds: number[];
  selectedProductIds: number[];
}
