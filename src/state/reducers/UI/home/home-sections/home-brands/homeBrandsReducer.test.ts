import {
  failGetHomeBrandsActionFake,
  pendGetHomeBrandsActionFake,
  selectBrandActionFake,
  successGetHomeBrandsActionFake,
} from '@__mocks__/fakeData/home/homeBrands';
import homeBrandsReducer, {
  initialState as homeBrandsReducerInitialState,
} from './homeBrandsReducer';
import {HTTP_REQUEST_STATE_ENUM} from '@app-types';
import {appleBrand} from '@__mocks__/separated-brands';

describe('homeBrandsReducer', () => {
  describe('getHomeBrands', () => {
    it('should return initial state if we pass state as undefined to reducer', () => {
      const homeSectionListingState = homeBrandsReducer(undefined, {} as any);
      expect(homeSectionListingState).toEqual(homeBrandsReducerInitialState);
    });

    it('should change state to loading if we pass action as getHomeBrandsRequest', () => {
      const homeSectionListingState = homeBrandsReducer(
        undefined,
        pendGetHomeBrandsActionFake as any,
      );
      expect(homeSectionListingState).toEqual({
        ...homeBrandsReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.PENDING,
      });
    });

    it('should change state to success if we pass action as getHomeBrandsSuccess and set the brandIds and selectedBrandId with the first item', () => {
      const homeSectionListingState = homeBrandsReducer(
        undefined,
        pendGetHomeBrandsActionFake as any,
      );
      expect(homeSectionListingState).toEqual({
        ...homeBrandsReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.PENDING,
      });

      const homeSectionListingState2 = homeBrandsReducer(
        homeSectionListingState,
        successGetHomeBrandsActionFake as any,
      );
      expect(homeSectionListingState2).toEqual({
        ...homeBrandsReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.SUCCESS,
        brandIds: [appleBrand.brandId],
        selectedBrandId: appleBrand.brandId,
      });
    });

    it('should change state to error if we pass action as getHomeBrandsError', () => {
      const homeSectionListingState = homeBrandsReducer(
        undefined,
        pendGetHomeBrandsActionFake as any,
      );
      expect(homeSectionListingState).toEqual({
        ...homeBrandsReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.PENDING,
      });

      const homeSectionListingState2 = homeBrandsReducer(
        homeSectionListingState,
        failGetHomeBrandsActionFake as any,
      );
      expect(homeSectionListingState2).toEqual({
        ...homeBrandsReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.FAILURE,
      });
    });
  });

  describe('selectBrand', () => {
    it('should change selectedBrandId if we pass action as selectBrand', () => {
      const homeSectionListingState = homeBrandsReducer(
        undefined,
        selectBrandActionFake as any,
      );
      expect(homeSectionListingState).toEqual({
        ...homeBrandsReducerInitialState,
        selectedBrandId: 1,
      });
    });
  });
});
