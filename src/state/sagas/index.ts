import {all, fork} from 'redux-saga/effects';
import homeSectionSagas from './home/homeSections.sagas';

export default function* rootSaga() {
  yield all([fork(homeSectionSagas)]);
}
