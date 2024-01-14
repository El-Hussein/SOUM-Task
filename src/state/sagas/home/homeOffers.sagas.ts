import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_HOME_OFFERS} from '@actions/ACTION_TYPES';
import {getOffersAPI} from '@services';
import {
  getHomeOffersError,
  getHomeOffersPending,
  getHomeOffersSuccess,
  onNewOffers,
} from '@actions';
import {
  GetOffersHTTPErrorResponse,
  GetOffersHTTPSuccessResponse,
  GetHomeOffersActionData,
} from '@app-types';

function* getHomeOffers({payload}: GetHomeOffersActionData) {
  const {productId} = payload;
  yield put(getHomeOffersPending());
  try {
    const response: GetOffersHTTPSuccessResponse = yield call(
      getOffersAPI,
      productId,
    );
    yield put(getHomeOffersSuccess(response));
    yield put(onNewOffers(response.data));
  } catch (e) {
    const error = e as GetOffersHTTPErrorResponse;
    yield put(getHomeOffersError(error));
  }
}

export function* watchGetHomeOffers() {
  yield takeEvery(GET_HOME_OFFERS.ACTION, getHomeOffers);
}
