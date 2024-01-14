import {GET_HOME_PRODUCTS} from '@actions/ACTION_TYPES';
import {
  GetProductsHTTPSuccessResponse,
  HTTP_REQUEST_STATE_ENUM,
  HomeProductsState,
} from '@app-types';

export default {
  [GET_HOME_PRODUCTS.PENDING]: (draftStart: HomeProductsState) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.PENDING;
  },
  [GET_HOME_PRODUCTS.SUCCESS]: (
    draftStart: HomeProductsState,
    {response}: {response: GetProductsHTTPSuccessResponse},
  ) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.SUCCESS;
    draftStart.productIds = response.data.map(product => product.id);
  },
  [GET_HOME_PRODUCTS.ERROR]: (draftStart: HomeProductsState) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.FAILURE;
  },
};
