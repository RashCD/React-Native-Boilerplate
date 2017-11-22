import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";

import userLogin from "../actions/sagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(userLogin);
    return store;
}
