import { schema } from 'normalizr';

export const brandSchema = new schema.Entity(
  'brands',
  {},
  {
    idAttribute: 'brandId',
  },
);

export const brandsSchema = [brandSchema];
