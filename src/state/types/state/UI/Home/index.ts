import {HomeCategoriesState} from './homeCategories.state.types';
import {HomeBrandsState} from './homeBrands.state.types';
import {HomeProductsState} from './homeProducts.state.types';

export interface HomeState {
  categories: HomeCategoriesState;
  brands: HomeBrandsState;
  products: HomeProductsState;
}

export * from './homeCategories.state.types';
export * from './homeBrands.state.types';
export * from './homeProducts.state.types';
