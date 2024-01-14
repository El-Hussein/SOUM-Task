import {Product} from '@app-types';
import {RootState} from '@app-types/RootState';

export const selectProducts = (state: RootState): Product[] => {
  const allProducts = state.entities.products;
  const productIds = state.UI.home.products.productIds;
  const products: Product[] = [];
  productIds?.forEach(id => {
    if (allProducts[id]) {
      products.push(allProducts[id]);
    }
  });
  return products;
};
