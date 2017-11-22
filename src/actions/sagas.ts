
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as ActionTypes from "../actions/types";

declare let firebase: any;

export function* userLogin() {
    yield takeLatest(ActionTypes.LOGIN_PENDING, fetchUser);
}

function* fetchUser() {
    yield put({ type: ActionTypes.LOGIN_PENDING, payload: null });
    console.log("in fetch user");
}

export default userLogin;