import * as ActionTypes from "../actions/types";

const INITIAL_STATE = {
    email: "",
    password: ""
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {...state, request: action.payload};

        case ActionTypes.LOGIN_PENDING:
            return {...state, pending: action.payload};

        case ActionTypes.LOGIN_SUCCESS:
            return {...state, success: action.payload};

        case ActionTypes.LOGIN_ERROR:
            return {...state, error: action.payload};

        default:
            return state;
    }
};
