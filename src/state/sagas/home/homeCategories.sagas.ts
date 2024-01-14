import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_HOME_CATEGORIES} from '@actions/ACTION_TYPES';
import {getCategoriesAPI} from '@services';
import {
  getHomeCategoriesError,
  getHomeCategoriesPending,
  getHomeCategoriesSuccess,
  onNewCategories,
} from '@actions';
import {
  GetCategoriesHTTPErrorResponse,
  GetCategoriesHTTPSuccessResponse,
} from '@app-types';

function* getHomeCategories() {
  yield put(getHomeCategoriesPending());
  try {
    const response: GetCategoriesHTTPSuccessResponse = yield call(
      getCategoriesAPI,
    );
    yield put(getHomeCategoriesSuccess(response));
    yield put(onNewCategories(response.data));
  } catch (e) {
    const error = e as GetCategoriesHTTPErrorResponse;
    yield put(getHomeCategoriesError(error));
  }
}

export function* watchGetHomeCategories() {
  yield takeEvery(GET_HOME_CATEGORIES.ACTION, getHomeCategories);
}
