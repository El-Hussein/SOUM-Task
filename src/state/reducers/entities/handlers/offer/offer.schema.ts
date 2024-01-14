import {schema} from 'normalizr';

export const offerSchema = new schema.Entity(
  'offers',
  {},
  {
    idAttribute: 'offerId',
  },
);

export const offersSchema = [offerSchema];
