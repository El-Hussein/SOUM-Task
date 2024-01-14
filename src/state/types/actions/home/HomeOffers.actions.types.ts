import {
  GetOffersHTTPErrorResponse,
  GetOffersHTTPSuccessResponse,
} from '@app-types/services';

export type GetHomeOffersActionData = {
  type: string;
  payload: {
    productId: number;
  };
};

export type GetHomeOffers = (productId: number) => GetHomeOffersActionData;

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
