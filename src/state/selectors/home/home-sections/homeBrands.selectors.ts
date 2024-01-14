import {Brand} from '@app-types';
import {RootState} from '@app-types/RootState';

export const selectBrands = (state: RootState): Brand[] => {
  const allBrands = state.entities.brands;
  const brandIds = state.UI.home.brands.brandIds;
  const brands: Brand[] = [];
  brandIds?.forEach(id => {
    if (allBrands[id]) {
      brands.push(allBrands[id]);
    }
  });
  return brands;
};
