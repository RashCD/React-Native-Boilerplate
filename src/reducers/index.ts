import { combineReducers } from "redux";
import apiServiceReducer from "./ApiServiceReducer";
import authReducer from "./AuthReducer";

export default combineReducers({
    auth: authReducer,
    apiService: apiServiceReducer
});
