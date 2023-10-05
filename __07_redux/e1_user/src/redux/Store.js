import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userSagas from "./saga/userSaga";
import rootReducer from "./reducer/RootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSagas);

export default store;
