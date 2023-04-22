import { applyMiddleware, createStore } from "redux";
import createRouterReducer from "./reducers";
import { createHashHistory } from "history"
import { routerMiddleware } from "connected-react-router";

export const history = createHashHistory()

const store = createStore(
    createRouterReducer(history),
    applyMiddleware(routerMiddleware(history))
)

export default store