import { OnNewBrands } from "@app-types/actions";
import { createActionNew } from "@utils/action.helpers";
import { ON_NEW_BRANDS } from "./brand.ACTION_TYPES";

export const onNewBrands: OnNewBrands = createActionNew(ON_NEW_BRANDS, 'brands');
