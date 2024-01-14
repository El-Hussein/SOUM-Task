import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import rootReducer from '../reducers/index';
import _rootSaga from '../sagas/index';

export function* rootSaga(getState) {
  yield all([_rootSaga()]);
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
