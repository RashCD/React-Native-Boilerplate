import * as ActionTypes from "../actions/types";

const INITIAL_STATE = {
    email: "",
    password: ""
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ActionTypes.EMAIL_CHANGE:
            return {...state, email: action.payload};

        case ActionTypes.PASSWORD_CHANGE:
            return {...state, password: action.payload};

        default:
            return state;
    }
};