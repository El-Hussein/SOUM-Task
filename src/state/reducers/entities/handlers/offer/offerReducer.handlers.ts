import { ON_NEW_OFFERS, REMOVE_FROM_CART } from '@actions/ACTION_TYPES';
import {
  Offer,
  EntitiesState,
  RemoveFromCartHTTPSuccessResponse,
} from '@app-types';
import { normalize } from 'normalizr';
import { offersSchema } from './offer.schema';

export default {
  [ON_NEW_OFFERS]: (
    draftState: EntitiesState,
    { offers }: { offers: Offer[] },
  ) => {
    const { entities } = normalize(offers, offersSchema);
    // don't override packages array for existing offers
    const newOffers: { [key: string]: Offer } = {};

    Object.keys(entities.offers as { [key: string]: Offer }).forEach(
      (offerId) => {
        const offer = (entities.offers as { [key: string]: Offer })[offerId];
        if (draftState.offers[offerId]) {
          offer.packages =
            offer.packages?.length === 0
              ? draftState.offers[offerId].packages
              : offer.packages;
        }
        newOffers[offerId] = offer;
      },
    );

    draftState.offers = {
      ...draftState.offers,
      ...(newOffers as { [key: string]: Offer }),
    };
  },
  [REMOVE_FROM_CART.SUCCESS]: (
    draftStart: EntitiesState,
    { response }: { response: RemoveFromCartHTTPSuccessResponse },
  ) => {
    // update in_cart flag for cart item offer
    const {
      data: { offer_id },
    } = response;
    draftStart.offers[offer_id].in_cart = 0;
  },
};
