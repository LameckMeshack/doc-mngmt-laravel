import { combineReducers } from "redux";
import authReducer from "./authReducers";
import departmentReducer from "./departmentReducers";
import documentReducer from "./documentReducers";

//combining reducers
export const rootReducer = combineReducers({
    userInfo: authReducer,
    documents: documentReducer,
    departments: departmentReducer,
});
