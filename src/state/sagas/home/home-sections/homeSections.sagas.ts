import {
  GetHomeSectionHTTPSuccessResponse,
  GetHomeSectionHTTPErrorResponse,
} from '@app-types';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { GET_HOME_SECTIONS } from '@actions/ACTION_TYPES';
import {
  getHomeSectionsError,
  getHomeSectionsPending,
  getHomeSectionsSuccess,
} from '@actions';
import { getHomeSectionsAPI } from '@services';
import { watchGetHomePromotions } from './homePromotions.sagas';
import { watchGetHomeSliders } from './homeSliders.sagas';
import { watchGetHomeCategories } from './homeCategories.sagas';
import { watchGetHomeBrands } from './homeBrands.sagas';
import { watchGetHomeOffers } from './homeOffers.sagas';
import { watchGetHomeRecommendations } from './homeRecommendations.sagas';
import { watchGetInfinityScrollHomeOffer } from './infinityScrollHomeOffer.sagas';
import { watchGetAvailableCashbackRule } from './availableCashbackRule.sagas';

function* getHomeSections() {
  yield put(getHomeSectionsPending());
  try {
    const response: GetHomeSectionHTTPSuccessResponse = yield call(
      getHomeSectionsAPI,
    );
    yield put(getHomeSectionsSuccess(response));
  } catch (e) {
    // need review
    const error = e as GetHomeSectionHTTPErrorResponse;
    yield put(getHomeSectionsError(error));
  }
}

export function* watchGetHomeSections() {
  yield takeLatest(GET_HOME_SECTIONS.ACTION, getHomeSections);
}

export default function* homeSectionSagas() {
  yield all([
    fork(watchGetHomeSections),
    fork(watchGetHomePromotions),
    fork(watchGetHomeSliders),
    fork(watchGetHomeCategories),
    fork(watchGetHomeBrands),
    fork(watchGetHomeOffers),
    fork(watchGetHomeRecommendations),
    fork(watchGetInfinityScrollHomeOffer),
    fork(watchGetAvailableCashbackRule),
  ]);
}
