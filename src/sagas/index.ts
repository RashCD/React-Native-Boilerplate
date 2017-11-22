import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as ActionTypes from "../actions/types";
import { userLogin } from "./userData";
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield [
    takeEvery(ActionTypes.LOGIN_REQUEST, userLogin),
    ];
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default mySaga;