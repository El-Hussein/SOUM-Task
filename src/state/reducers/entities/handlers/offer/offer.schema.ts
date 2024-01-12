import { schema } from 'normalizr';

export const offerSchema = new schema.Entity(
  'offers',
  {},
  {
    idAttribute: 'offer_id',
  },
);

export const offersSchema = [offerSchema];
