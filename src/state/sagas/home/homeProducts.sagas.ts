import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_HOME_PRODUCTS} from '@actions/ACTION_TYPES';
import {getProductsAPI} from '@services';
import {
  getHomeProductsError,
  getHomeProductsPending,
  getHomeProductsSuccess,
  onNewProducts,
} from '@actions';
import {
  GetProductsHTTPErrorResponse,
  GetProductsHTTPSuccessResponse,
  GetHomeProductsActionData,
} from '@app-types';

export function* getHomeProducts({payload}: GetHomeProductsActionData) {
  const {brandId} = payload;
  yield put(getHomeProductsPending());
  try {
    const response: GetProductsHTTPSuccessResponse = yield call(
      getProductsAPI,
      brandId,
    );
    yield put(getHomeProductsSuccess(response));
    yield put(onNewProducts(response.data));
  } catch (e) {
    const error = e as GetProductsHTTPErrorResponse;
    yield put(getHomeProductsError(error));
  }
}

export function* watchGetHomeProducts() {
  yield takeLatest(GET_HOME_PRODUCTS.ACTION, getHomeProducts);
}
