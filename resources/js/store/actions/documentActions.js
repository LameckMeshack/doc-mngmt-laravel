import axios from " axios ";
import {
    GET_DOCUMENTS,
    GET_DOCUMENT,
    CREATE_DOCUMENT,
    UPDATE_DOCUMENT,
    DELETE_DOCUMENT,
    DOCACTIONFAILED,
} from "../constants/documentConstants";

export const createDocument = (documentDetails) => async (dispatch) => {
    try {
        const { data } = await axios.post("/api/documents", documentDetails);
        dispatch({
            type: CREATE_DOCUMENT,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DOCACTIONFAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getDocuments = () => async (dispatch) => {
    try {
        const { data } = await axios.get("/api/documents");
        dispatch({
            type: GET_DOCUMENTS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DOCACTIONFAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getDocument = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/api/documents/${id}`);
        dispatch({
            type: GET_DOCUMENT,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DOCACTIONFAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateDocument = (id, documentDetails) => async (dispatch) => {
    try {
        const { data } = await axios.put(
            `/api/documents/${id}`,
            documentDetails
        );
        dispatch({
            type: UPDATE_DOCUMENT,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DOCACTIONFAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteDocument = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/documents/${id}`);
        dispatch({
            type: DELETE_DOCUMENT,
            payload: id,
        });
    } catch (error) {
        dispatch({
            type: DOCACTIONFAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
