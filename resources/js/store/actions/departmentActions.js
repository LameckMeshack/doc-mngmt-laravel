import axios from "axios";

import {
    GET_DEPARTMENTS,
    ADD_DEPARTMENT,
    DELETE_DEPARTMENT,
    DEPARTMENTS_LOADING,
} from "./types";

export const getDepartments = () => (dispatch) => {
    axios
        .get("/api/departments")
        .then((res) =>
            dispatch({
                type: GET_DEPARTMENTS,
                payload: res.data,
            })
        )
        .catch((err) =>
            dispatch({
                type: GET_DEPARTMENTS,
                payload: null,
            })
        );
};
