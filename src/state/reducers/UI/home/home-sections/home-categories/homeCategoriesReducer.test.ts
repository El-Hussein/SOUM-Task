import {
  failGetHomeCategoriesActionFake,
  pendGetHomeCategoriesActionFake,
  selectCategoryActionFake,
  successGetHomeCategoriesActionFake,
} from '@__mocks__/fakeData/home/homeCategories';
import homeCategoriesReducer, {
  initialState as homeCategoriesReducerInitialState,
} from './homeCategoriesReducer';
import {HTTP_REQUEST_STATE_ENUM} from '@app-types';
import {phonesCategory} from '@__mocks__/separated-categories';

describe('homeCategoriesReducer', () => {
  describe('getHomeCategories', () => {
    it('should return initial state if we pass state as undefined to reducer', () => {
      const homeSectionListingState = homeCategoriesReducer(
        undefined,
        {} as any,
      );
      expect(homeSectionListingState).toEqual(
        homeCategoriesReducerInitialState,
      );
    });

    it('should change state to loading if we pass action as getHomeCategoriesRequest', () => {
      const homeSectionListingState = homeCategoriesReducer(
        undefined,
        pendGetHomeCategoriesActionFake as any,
      );
      expect(homeSectionListingState).toEqual({
        ...homeCategoriesReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.PENDING,
      });
    });

    it('should change state to success if we pass action as getHomeCategoriesSuccess and set the categoryIds and selectedCategoryId with the first item', () => {
      const homeSectionListingState = homeCategoriesReducer(
        undefined,
        pendGetHomeCategoriesActionFake as any,
      );
      expect(homeSectionListingState).toEqual({
        ...homeCategoriesReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.PENDING,
      });

      const homeSectionListingState2 = homeCategoriesReducer(
        homeSectionListingState,
        successGetHomeCategoriesActionFake as any,
      );
      expect(homeSectionListingState2).toEqual({
        ...homeCategoriesReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.SUCCESS,
        categoryIds: [phonesCategory.categoryId],
        selectedCategoryId: phonesCategory.categoryId,
      });
    });

    it('should change state to error if we pass action as getHomeCategoriesError', () => {
      const homeSectionListingState = homeCategoriesReducer(
        undefined,
        pendGetHomeCategoriesActionFake as any,
      );
      expect(homeSectionListingState).toEqual({
        ...homeCategoriesReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.PENDING,
      });

      const homeSectionListingState2 = homeCategoriesReducer(
        homeSectionListingState,
        failGetHomeCategoriesActionFake as any,
      );
      expect(homeSectionListingState2).toEqual({
        ...homeCategoriesReducerInitialState,
        state: HTTP_REQUEST_STATE_ENUM.FAILURE,
      });
    });
  });

  describe('selectCategory', () => {
    it('should change selectedCategoryId if we pass action as selectCategory', () => {
      const homeSectionListingState = homeCategoriesReducer(
        undefined,
        selectCategoryActionFake as any,
      );
      expect(homeSectionListingState).toEqual({
        ...homeCategoriesReducerInitialState,
        selectedCategoryId: 1,
      });
    });
  });
});
