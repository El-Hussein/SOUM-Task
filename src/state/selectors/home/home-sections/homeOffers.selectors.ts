import {HTTP_REQUEST_STATE_ENUM, Offer} from '@app-types';
import {RootState} from '@app-types/RootState';
import {createSelector} from 'reselect';

export const selectOffers = createSelector(
  (state: RootState) => state.entities.offers,
  (state: RootState) => state.UI.home.offers.offerIds,
  (offers, offerIds) => {
    const offersArray: Offer[] = [];
    offerIds?.forEach(id => {
      if (offers[id]) {
        offersArray.push(offers[id]);
      }
    });
    return offersArray;
  },
);

export const selectLoadingOffers = createSelector(
  (state: RootState) => state.UI.home.offers.state,
  state => state === HTTP_REQUEST_STATE_ENUM.PENDING,
);
