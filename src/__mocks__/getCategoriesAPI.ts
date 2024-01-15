import {Category} from '@app-types';
import {
  phonesCategory,
  computersCategory,
  tvsCategory,
  watchesCategory,
} from './separated-categories';

export const categories: Category[] = [
  phonesCategory,
  computersCategory,
  tvsCategory,
  watchesCategory,
];

export const getCategoriesAPIData = () => {
  return categories;
};
