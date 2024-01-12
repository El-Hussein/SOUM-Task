import { OnNewOffers } from "@app-types/actions";
import { createActionNew } from "@utils/action.helpers";
import { ON_NEW_OFFERS } from "./offer.ACTION_TYPES";

export const onNewOffers: OnNewOffers = createActionNew(ON_NEW_OFFERS, 'offers');
