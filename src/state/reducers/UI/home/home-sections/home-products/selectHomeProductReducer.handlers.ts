import {SELECT_ALL_PRODUCTS, SET_SELECTED_PRODUCT} from '@actions/ACTION_TYPES';
import {HomeProductsState} from '@app-types';

export default {
  [SET_SELECTED_PRODUCT]: (
    draftStart: HomeProductsState,
    {productId}: {productId: number},
  ) => {
    const index = draftStart.selectedProductIds.indexOf(productId);
    if (index > -1) {
      draftStart.selectedProductIds.splice(index, 1);
      if (draftStart.selectedProductIds[0] === 0) {
        draftStart.selectedProductIds.splice(0, 1);
      }
    } else {
      draftStart.selectedProductIds.push(productId);
    }
  },
  [SELECT_ALL_PRODUCTS]: (draftStart: HomeProductsState) => {
    draftStart.selectedProductIds = [0, ...draftStart.productIds];
  },
};
