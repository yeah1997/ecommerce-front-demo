import { applyMiddleware, createStore } from "redux";
import createRouterReducer from "./reducers";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/index";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createHashHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRouterReducer(history),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;
