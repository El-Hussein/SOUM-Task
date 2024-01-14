import {Offer} from '@app-types';
import {RootState} from '@app-types/RootState';

export const selectAllOffers = (state: RootState): {[id: string]: Offer} => {
  return state.entities.offers;
};
