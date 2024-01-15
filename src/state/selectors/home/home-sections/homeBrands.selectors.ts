import {Brand, HTTP_REQUEST_STATE_ENUM} from '@app-types';
import {RootState} from '@app-types/RootState';
import {createSelector} from 'reselect';

export const selectBrands = createSelector(
  (state: RootState) => state.entities.brands,
  (state: RootState) => state.UI.home.brands.brandIds,
  (brands, brandIds) => {
    const brandsArray: Brand[] = [];
    brandIds?.forEach(id => {
      if (brands[id]) {
        brandsArray.push(brands[id]);
      }
    });
    return brandsArray;
  },
);

export const selectSelectedBrandId = createSelector(
  (state: RootState) => state.UI.home.brands.selectedBrandId,
  selectedBrandId => selectedBrandId,
);

export const selectLoadingBrands = createSelector(
  (state: RootState) => state.UI.home.brands.state,
  state => state === HTTP_REQUEST_STATE_ENUM.PENDING,
);
