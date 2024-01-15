import {appleBrand} from '@__mocks__/separated-brands';
import entitiesReducer, {
  initialState as entitiesReducerInitialState,
} from './entitiesReducer';
import {phonesCategory} from '@__mocks__/separated-categories';
import {iphone15Black128} from '@__mocks__/separated-offers';
import {Iphone15} from '@__mocks__/separated-products';
import {
  onNewBrandsActionFake,
  onNewCategoriesActionFake,
  onNewOffersActionFake,
  onNewProductsActionFake,
} from '@__mocks__/fakeData';
import {waitFor} from '@testing-library/react-native';

describe('entitiesReducer', () => {
  it('empty test', () => {});
  it('should return initial state if we pass state as undefined to reducer', () => {
    const entitiesState = entitiesReducer(undefined, {} as any);
    expect(entitiesState).toEqual(entitiesReducerInitialState);
  });

  describe('brand', () => {
    it('should add new brand to the state', async () => {
      await waitFor(() => {
        const entitiesState = entitiesReducer(undefined, onNewBrandsActionFake);
        expect(entitiesState).toEqual({
          ...entitiesReducerInitialState,
          brands: {
            [appleBrand.brandId]: appleBrand,
          },
        });
      });
    });
  });

  describe('category', () => {
    it('should add new category to the state', () => {
      const entitiesState = entitiesReducer(
        undefined,
        onNewCategoriesActionFake,
      );
      expect(entitiesState).toEqual({
        ...entitiesReducerInitialState,
        categories: {
          [phonesCategory.categoryId]: phonesCategory,
        },
      });
    });
  });

  describe('offer', () => {
    it('should add new offer to the state', () => {
      const entitiesState = entitiesReducer(undefined, onNewOffersActionFake);
      expect(entitiesState).toEqual({
        ...entitiesReducerInitialState,
        offers: {
          [iphone15Black128.offerId]: iphone15Black128,
        },
      });
    });
  });

  describe('product', () => {
    it('should add new product to the state', () => {
      const entitiesState = entitiesReducer(undefined, onNewProductsActionFake);
      expect(entitiesState).toEqual({
        ...entitiesReducerInitialState,
        products: {
          [Iphone15.productId]: Iphone15,
        },
      });
    });
  });
});
