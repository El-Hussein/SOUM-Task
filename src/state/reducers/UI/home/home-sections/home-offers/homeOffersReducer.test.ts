import {
  failGetHomeOffersActionFake,
  pendGetHomeOffersActionFake,
  successGetHomeOffersActionFake,
} from '@__mocks__/fakeData/home/homeOffers';
import homeOffersReducer, {
  initialState as homeOffersReducerInitialState,
} from './homeOffersReducer';
import {HTTP_REQUEST_STATE_ENUM} from '@app-types';
import {iphone15Black128} from '@__mocks__/separated-offers';

describe('homeOffersReducer', () => {
  describe('getHomeOffers', () => {
    it('should return initial state if we pass state as undefined to reducer', () => {
      const homeSectionListingState = homeOffersReducer(undefined, {} as any);
      expect(homeSectionListingState).toEqual(homeOffersReducerInitialState);
    });

    it('should change state to loading if we pass action as getHomeOffersRequest', () => {
      const homeSectionListingState = homeOffersReducer(
        undefined,
        pendGetHomeOffersActionFake as any,
      );
      expect(homeSectionListingState).toEqual({
        ...homeOffersReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.PENDING,
      });
    });

    it('should change state to success if we pass action as getHomeOffersSuccess and set the offerIds and selectedOfferId with the first item', () => {
      const homeSectionListingState = homeOffersReducer(
        undefined,
        pendGetHomeOffersActionFake as any,
      );
      expect(homeSectionListingState).toEqual({
        ...homeOffersReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.PENDING,
      });

      const homeSectionListingState2 = homeOffersReducer(
        homeSectionListingState,
        successGetHomeOffersActionFake as any,
      );
      expect(homeSectionListingState2).toEqual({
        ...homeOffersReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.SUCCESS,
        offerIds: [iphone15Black128.offerId],
      });
    });

    it('should change state to error if we pass action as getHomeOffersError', () => {
      const homeSectionListingState = homeOffersReducer(
        undefined,
        pendGetHomeOffersActionFake as any,
      );
      expect(homeSectionListingState).toEqual({
        ...homeOffersReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.PENDING,
      });

      const homeSectionListingState2 = homeOffersReducer(
        homeSectionListingState,
        failGetHomeOffersActionFake as any,
      );
      expect(homeSectionListingState2).toEqual({
        ...homeOffersReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.FAILURE,
      });
    });
  });
});
