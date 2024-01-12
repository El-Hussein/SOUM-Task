import { Brand } from "@app-types/state";

export type OnNewBrands = (brands: Brand[]) => {
  type: string;
  payload: {
    brands: Brand[];
  };
};
