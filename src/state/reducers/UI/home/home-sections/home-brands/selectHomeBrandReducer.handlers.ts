import {SET_SELECTED_BRAND} from '@actions/ACTION_TYPES';
import {HomeBrandsState} from '@app-types';

export default {
  [SET_SELECTED_BRAND]: (
    draftStart: HomeBrandsState,
    {brandId}: {brandId: number},
  ) => {
    draftStart.selectedBrandId = brandId;
  },
};
