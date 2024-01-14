import {Offer, PagingData} from '@app-types';

export enum OFFER_ORDER_ENUM {
  PRICE_LOW = 'price_low',
  PRICE_HIGH = 'price_high',
  NEWEST = 'newest',
  MOST_POPULAR = 'most_popular',
  RECOMMENDED = 'recommended',
}

export interface GetOffersHTTPSuccessResponse {
  data: Offer[];
}

export interface GetOffersHTTPErrorResponse {
  error: any;
}

export type GetOffersAPI = (
  productId: number,
) => Promise<GetOffersHTTPSuccessResponse | GetOffersHTTPErrorResponse>;
