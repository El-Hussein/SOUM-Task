import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import rootReducer from './combine-reducers';
import { productSagas } from '../products/sagas';
// eslint-disable-next-line import/no-cycle
import { cartSagas } from '../cart/sagas';
import { accountSagas } from '../account/sagas';
import _rootSaga from '../state/sagas';

export function* rootSaga(getState) {
  yield all([
    productSagas(),
    cartSagas(),
    accountSagas(),
    _rootSaga(), // root saga of new state
  ]);
}

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Middleware

const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

const store = configureStore();

export default store;