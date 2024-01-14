import {schema} from 'normalizr';

export const productSchema = new schema.Entity(
  'products',
  {},
  {
    idAttribute: 'productId',
  },
);

export const productsSchema = [productSchema];
