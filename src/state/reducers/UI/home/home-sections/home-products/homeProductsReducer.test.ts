import {
  failGetHomeProductsActionFake,
  pendGetHomeProductsActionFake,
  selectAllProductsActionFake,
  selectProductActionFake,
  selectProductActionFake2,
  successGetHomeProductsActionFake,
} from '@__mocks__/fakeData/home/homeProducts';
import homeProductsReducer, {
  initialState as homeProductsReducerInitialState,
} from './homeProductsReducer';
import {HTTP_REQUEST_STATE_ENUM} from '@app-types';
import {Iphone15, Iphone15Pro} from '@__mocks__/separated-products';

describe('homeProductsReducer', () => {
  describe('getHomeProducts', () => {
    it('should return initial state if we pass state as undefined to reducer', () => {
      const homeSectionListingState = homeProductsReducer(undefined, {} as any);
      expect(homeSectionListingState).toEqual(homeProductsReducerInitialState);
    });

    it('should change state to loading if we pass action as getHomeProductsRequest', () => {
      const homeSectionListingState = homeProductsReducer(
        undefined,
        pendGetHomeProductsActionFake,
      );
      expect(homeSectionListingState).toEqual({
        ...homeProductsReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.PENDING,
      });
    });

    it('should change state to success if we pass action as getHomeProductsSuccess and set the productIds and selectedProductId with the first item', () => {
      const homeSectionListingState = homeProductsReducer(
        undefined,
        pendGetHomeProductsActionFake,
      );
      expect(homeSectionListingState).toEqual({
        ...homeProductsReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.PENDING,
      });

      const homeSectionListingState2 = homeProductsReducer(
        homeSectionListingState,
        successGetHomeProductsActionFake,
      );
      expect(homeSectionListingState2).toEqual({
        ...homeProductsReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.SUCCESS,
        productIds: [Iphone15.productId, Iphone15Pro.productId],
        selectedProductIds: [Iphone15.productId],
      });
    });

    it('should change state to error if we pass action as getHomeProductsError', () => {
      const homeSectionListingState = homeProductsReducer(
        undefined,
        pendGetHomeProductsActionFake,
      );
      expect(homeSectionListingState).toEqual({
        ...homeProductsReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.PENDING,
      });

      const homeSectionListingState2 = homeProductsReducer(
        homeSectionListingState,
        failGetHomeProductsActionFake,
      );
      expect(homeSectionListingState2).toEqual({
        ...homeProductsReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.FAILURE,
      });
    });
  });

  describe('selectProduct', () => {
    it('should change selectedProductId if we pass action as selectProduct and it should multi select and remove selected', () => {
      const homeSectionListingState = homeProductsReducer(
        undefined,
        selectProductActionFake,
      );
      expect(homeSectionListingState).toEqual({
        ...homeProductsReducerInitialState,
        selectedProductIds: [1],
      });

      const homeSectionListingState2 = homeProductsReducer(
        homeSectionListingState,
        selectProductActionFake2,
      );
      expect(homeSectionListingState2).toEqual({
        ...homeProductsReducerInitialState,
        selectedProductIds: [1, 2],
      });

      const homeSectionListingState3 = homeProductsReducer(
        homeSectionListingState2,
        selectProductActionFake,
      );
      expect(homeSectionListingState3).toEqual({
        ...homeProductsReducerInitialState,
        selectedProductIds: [2],
      });
    });

    it('should select All if we passed selectAllProduct and append 0 to the first item to indicate all is selected', () => {
      const homeSectionListingState = homeProductsReducer(
        {...homeProductsReducerInitialState, productIds: [1, 2]},
        selectAllProductsActionFake,
      );
      expect(homeSectionListingState).toEqual({
        ...homeProductsReducerInitialState,
        productIds: [1, 2],
        selectedProductIds: [0, 1, 2],
      });
    });

    it('should remove 0 from the selected id if we deselect product', () => {
      const homeSectionListingState = homeProductsReducer(
        {...homeProductsReducerInitialState, productIds: [1, 2]},
        selectAllProductsActionFake,
      );
      expect(homeSectionListingState).toEqual({
        ...homeProductsReducerInitialState,
        productIds: [1, 2],
        selectedProductIds: [0, 1, 2],
      });

      const homeSectionListingState2 = homeProductsReducer(
        homeSectionListingState,
        selectProductActionFake,
      );
      expect(homeSectionListingState2).toEqual({
        ...homeProductsReducerInitialState,
        productIds: [1, 2],
        selectedProductIds: [2],
      });
    });
  });
});
