import {GET_HOME_BRANDS} from '@actions/ACTION_TYPES';
import {
  GetBrandsHTTPSuccessResponse,
  HTTP_REQUEST_STATE_ENUM,
  HomeBrandsState,
} from '@app-types';

export default {
  [GET_HOME_BRANDS.PENDING]: (draftStart: HomeBrandsState) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.PENDING;
  },
  [GET_HOME_BRANDS.SUCCESS]: (
    draftStart: HomeBrandsState,
    {response}: {response: GetBrandsHTTPSuccessResponse},
  ) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.SUCCESS;
    draftStart.brandIds = response.data.map(brand => brand.brandId);
  },
  [GET_HOME_BRANDS.ERROR]: (draftStart: HomeBrandsState) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.FAILURE;
  },
};
