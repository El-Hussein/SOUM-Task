import {
  GetOffersHTTPErrorResponse,
  GetOffersHTTPSuccessResponse,
} from '@app-types/services';

export type GetHomeOffersActionData = {
  type: string;
  payload: {
    productIds: number[];
  };
};

export type GetHomeOffers = (productIds: number[]) => GetHomeOffersActionData;

export type GetHomeOffersError = (error: GetOffersHTTPErrorResponse) => {
  type: string;
  payload: {
    error: GetOffersHTTPErrorResponse;
  };
};

export type GetHomeOffersSuccess = (response: GetOffersHTTPSuccessResponse) => {
  type: string;
  payload: {
    data: any;
  };
};
