import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_HOME_BRANDS} from '@actions/ACTION_TYPES';
import {getBrandsAPI} from '@services';
import {
  getHomeBrandsError,
  getHomeBrandsPending,
  getHomeBrandsSuccess,
  onNewBrands,
} from '@actions';
import {
  GetBrandsHTTPErrorResponse,
  GetBrandsHTTPSuccessResponse,
  GetHomeBrandsActionData,
} from '@app-types';

export function* getHomeBrands({payload}: GetHomeBrandsActionData) {
  const {categoryId} = payload;
  yield put(getHomeBrandsPending());
  try {
    const response: GetBrandsHTTPSuccessResponse = yield call(
      getBrandsAPI,
      categoryId,
    );
    yield put(getHomeBrandsSuccess(response));
    yield put(onNewBrands(response.data));
  } catch (e) {
    const error = e as GetBrandsHTTPErrorResponse;
    yield put(getHomeBrandsError(error));
  }
}

export function* watchGetHomeBrands() {
  yield takeLatest(GET_HOME_BRANDS.ACTION, getHomeBrands);
}
