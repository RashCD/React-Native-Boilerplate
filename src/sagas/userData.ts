import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { error, pending, request, success } from "../actions/index";

import * as ActionTypes from "../actions/types";

export function* userLogin(action: any) {
    console.log(action, "in user data sagas");
    try {
        yield put(success(action.payload));
    } catch (e) {
        yield put(error(action.payload));
    }
}
