//import action creators

import { LoginTypes } from "../constants/loginActionTypes";

const initialState = {
    user: null,
    error: null,
    loading: false,
};
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LoginTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case LoginTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
            };
        case LoginTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        case LoginTypes.LOGOUT:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};
