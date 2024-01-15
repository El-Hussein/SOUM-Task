import {GET_HOME_OFFERS} from '@actions/ACTION_TYPES';
import {
  GetOffersHTTPSuccessResponse,
  HTTP_REQUEST_STATE_ENUM,
  HomeOffersState,
} from '@app-types';

export default {
  [GET_HOME_OFFERS.PENDING]: (draftStart: HomeOffersState) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.PENDING;
  },
  [GET_HOME_OFFERS.SUCCESS]: (
    draftStart: HomeOffersState,
    {response}: {response: GetOffersHTTPSuccessResponse},
  ) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.SUCCESS;
    draftStart.offerIds = response.data.map(offer => offer.offerId);
  },
  [GET_HOME_OFFERS.ERROR]: (draftStart: HomeOffersState) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.FAILURE;
  },
};
