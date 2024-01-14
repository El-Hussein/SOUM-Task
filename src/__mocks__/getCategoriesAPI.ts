import {Category} from '@app-types';
import {Phones, Computers, TVs, Watches} from './separated-categories';

export const categories: Category[] = [Phones, Computers, TVs, Watches];

export const getCategoriesAPIData = () => {
  return categories;
};
