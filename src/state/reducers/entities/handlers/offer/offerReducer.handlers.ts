import {ON_NEW_OFFERS} from '@actions/ACTION_TYPES';
import {
  Offer,
  EntitiesState,
  // RemoveFromCartHTTPSuccessResponse,
} from '@app-types';
import {normalize} from 'normalizr';
import {offersSchema} from './offer.schema';

export default {
  [ON_NEW_OFFERS]: (draftState: EntitiesState, {offers}: {offers: Offer[]}) => {
    const {entities} = normalize(offers, offersSchema);
    draftState.offers = {
      ...draftState.offers,
      ...(entities.offers as {[key: string]: Offer}),
    };
  },
  // [REMOVE_FROM_CART.SUCCESS]: (
  //   draftStart: EntitiesState,
  //   { response }: { response: RemoveFromCartHTTPSuccessResponse },
  // ) => {
  //   // update in_cart flag for cart item offer
  //   const {
  //     data: { offer_id },
  //   } = response;
  //   draftStart.offers[offer_id].in_cart = false;
  // },
};
