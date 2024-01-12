import { Offer } from "@app-types/state";

export type OnNewOffers = (offers: Offer[]) => {
  type: string;
  payload: {
    offers: Offer[];
  };
};
