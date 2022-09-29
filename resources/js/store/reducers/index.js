import { combineReducers } from "redux";
import authReducer from "./authReducers";

//combining reducers
export const rootReducer = combineReducers({
    userInfo: authReducer,
});
