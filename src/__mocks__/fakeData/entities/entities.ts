import {appleBrand} from '@__mocks__/separated-brands';
import {phonesCategory} from '@__mocks__/separated-categories';
import {iphone15Black128} from '@__mocks__/separated-offers';
import {Iphone15} from '@__mocks__/separated-products';
import {
  ON_NEW_BRANDS,
  ON_NEW_CATEGORIES,
  ON_NEW_OFFERS,
  ON_NEW_PRODUCTS,
} from '@actions/ACTION_TYPES';

export const onNewBrandsActionFake = {
  type: ON_NEW_BRANDS,
  payload: {brands: [appleBrand]},
};

export const onNewCategoriesActionFake = {
  type: ON_NEW_CATEGORIES,
  payload: {categories: [phonesCategory]},
};

export const onNewOffersActionFake = {
  type: ON_NEW_OFFERS,
  payload: {offers: [iphone15Black128]},
};

export const onNewProductsActionFake = {
  type: ON_NEW_PRODUCTS,
  payload: {products: [Iphone15]},
};
