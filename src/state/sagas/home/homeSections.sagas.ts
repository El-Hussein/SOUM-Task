import {all, fork} from 'redux-saga/effects';
import {watchGetHomeCategories} from './homeCategories.sagas';
import {watchGetHomeBrands} from './homeBrands.sagas';
import {watchGetHomeOffers} from './homeOffers.sagas';

export default function* homeSectionSagas() {
  yield all([
    fork(watchGetHomeCategories),
    fork(watchGetHomeBrands),
    fork(watchGetHomeOffers),
  ]);
}
