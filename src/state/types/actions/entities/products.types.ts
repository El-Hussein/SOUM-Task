import {Product} from '@app-types/state';

export type OnNewProducts = (products: Product[]) => {
  type: string;
  payload: {
    products: Product[];
  };
};
