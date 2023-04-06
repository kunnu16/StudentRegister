import { applyMiddleware, createStore } from "redux";

import createSagaMiddleware from "redux-saga";
import Reducer from "../Redux/Reducer/Reducer";
import tokenWatcher from "../Saga/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(tokenWatcher);

export default store;
