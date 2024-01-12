import { Seller } from "@app-types/state";

export type OnNewSellers = (sellers: Seller[]) => {
  type: string;
  payload: {
    stores: Seller[];
  };
};
