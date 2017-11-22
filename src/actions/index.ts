
import * as ActionTypes from "../actions/types";

export const emailChange = (text: string) => {
    return {
        type: ActionTypes.EMAIL_CHANGE,
        payload: text
    };
};

export const passwordChange = (text: string) => {
    return {
        type: ActionTypes.PASSWORD_CHANGE,
        payload: text
    };
};

export const request = (data: any) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        payload: data
    };
};

export const pending = (data: any) => {
    return {
        type: ActionTypes.LOGIN_PENDING,
        payload: data
    };
};

export const success = (data: any) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: data
    };
};

export const error = (data: any) => {
    return {
        type: ActionTypes.LOGIN_ERROR,
        payload: data
    };
};