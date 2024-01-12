import { Category } from "@app-types/state";

export type OnNewCategories = (categories: Category[]) => {
  type: string;
  payload: {
    categories: Category[];
  };
};
