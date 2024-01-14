import {combineReducers} from 'redux';
import homeCategoriesReducer from './home-sections/home-categories/homeCategoriesReducer';
import homeBrandsReducer from './home-sections/home-brands/homeBrandsReducer';
import homeProductsReducer from './home-sections/home-products/homeProductsReducer';

const homeReducer = combineReducers({
  categories: homeCategoriesReducer,
  brands: homeBrandsReducer,
  products: homeProductsReducer,
});

export default homeReducer;
