import { schema } from 'normalizr';

export const categorySchema = new schema.Entity(
  'categories',
  {},
  {
    idAttribute: 'categoryId',
  },
);

export const categoriesSchema = [categorySchema];
