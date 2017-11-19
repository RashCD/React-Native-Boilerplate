import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/index';

// let middleware = ['thunk'];

// if (__DEV__) {
//     const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
//     middleware = [...middleware, reduxImmutableStateInvariant];
// } else {
//     middleware = [...middleware];
// }

export default function configureStore(initialState?: object) {
    return createStore(rootReducer, initialState);
}
