import { Offer } from "@app-types";
import { ReduxState } from "@utils/types";

export const selectAllOffers = (state: ReduxState): {[id: string]: Offer} => {
    return state.newState.entities.offers;
};