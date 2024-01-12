import { OnNewCategories } from "@app-types/actions";
import { createActionNew } from "@utils/action.helpers";
import { ON_NEW_CATEGORIES } from "./category.ACTION_TYPES";

export const onNewCategories: OnNewCategories = createActionNew(ON_NEW_CATEGORIES, 'categories');
