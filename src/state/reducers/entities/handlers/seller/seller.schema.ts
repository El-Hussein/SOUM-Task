import { schema } from 'normalizr';

export const sellerSchema = new schema.Entity(
  'sellers',
  {},
  {
    idAttribute: 'sellerId',
  },
);

export const sellersSchema = [sellerSchema];
