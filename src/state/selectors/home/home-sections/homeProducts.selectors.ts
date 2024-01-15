import {HTTP_REQUEST_STATE_ENUM, Product} from '@app-types';
import {RootState} from '@app-types/RootState';
import {createSelector} from 'reselect';

export const selectProducts = createSelector(
  (state: RootState) => state.entities.products,
  (state: RootState) => state.UI.home.products.productIds,
  (products, productIds) => {
    const productsArray: Product[] = [];
    productIds?.forEach(id => {
      if (products[id]) {
        productsArray.push(products[id]);
      }
    });
    return productsArray;
  },
);

export const selectSelectedProductIds = createSelector(
  (state: RootState) => state.UI.home.products.selectedProductIds,
  selectedProductIds => selectedProductIds,
);

export const selectLoadingProducts = createSelector(
  (state: RootState) => state.UI.home.products.state,
  state => state === HTTP_REQUEST_STATE_ENUM.PENDING,
);
