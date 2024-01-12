import { OnNewSellers } from "@app-types/actions";
import { createActionNew } from "@utils/action.helpers";
import { ON_NEW_SELLERS } from "./seller.ACTION_TYPES";

export const onNewSellers: OnNewSellers = createActionNew(ON_NEW_SELLERS, 'sellers');
