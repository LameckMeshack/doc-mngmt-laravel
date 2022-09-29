//action creators
import { LoginTypes } from "../constants/loginActionTypes";

export const LoginActionCreators = {
    loginRequest: (email, password) => ({
        type: LoginTypes.LOGIN_REQUEST,
        payload: { email, password },
    }),
    loginSuccess: (user) => ({
        type: LoginTypes.LOGIN_SUCCESS,
        payload: { user },
    }),
    loginFailure: (error) => ({
        type: LoginTypes.LOGIN_FAILURE,
        payload: { error },
    }),
    logout: () => ({
        type: LoginTypes.LOGOUT,
    }),
};
