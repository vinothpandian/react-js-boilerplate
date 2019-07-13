/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;

/* eslint-enable */
