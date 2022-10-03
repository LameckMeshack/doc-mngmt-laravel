import axios from "axios";
import {
    GET_DEPARTMENTS,
    GET_DEPARTMENT,
    CREATE_DEPARTMENT,
    UPDATE_DEPARTMENT,
    DELETE_DEPARTMENT,
    DEPACTIONFAILED,
} from "../constants/departmentConstants";

export const createDepartment = (departmentDetails) => async (dispatch) => {
    try {
        const { data } = await axios.post(
            "/api/departments",
            departmentDetails
        );
        dispatch({
            type: CREATE_DEPARTMENT,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DEPACTIONFAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getDepartments = () => async (dispatch) => {
    try {
        const { data } = await axios.get("/api/departments");
        dispatch({
            type: GET_DEPARTMENTS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DEPACTIONFAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getDepartment = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/api/departments/${id}`);
        dispatch({
            type: GET_DEPARTMENT,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DEPACTIONFAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateDepartment = (id, departmentDetails) => async (dispatch) => {
    try {
        const { data } = await axios.put(
            `/api/departments/${id}`,
            departmentDetails
        );
        dispatch({
            type: UPDATE_DEPARTMENT,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DEPACTIONFAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteDepartment = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/departments/${id}`);
        dispatch({
            type: DELETE_DEPARTMENT,
            payload: id,
        });
    } catch (error) {
        dispatch({
            type: DEPACTIONFAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
