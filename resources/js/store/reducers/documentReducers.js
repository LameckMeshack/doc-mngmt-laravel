import {
    GET_DOCUMENTS,
    GET_DOCUMENT,
    CREATE_DOCUMENT,
    UPDATE_DOCUMENT,
    DELETE_DOCUMENT,
    DOCACTIONFAILED,
} from "../constants/documentConstants";

//Initial State of the document
const initialState = {
    documents: [],
    document: {},
    loading: true,
    error: {},
};

//document reducers
const documentReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_DOCUMENTS:
            return {
                ...state,
                documents: payload,
                loading: false,
            };
        case GET_DOCUMENT:
            return {
                ...state,
                document: payload,
                loading: false,
            };
        case CREATE_DOCUMENT:
            return {
                ...state,
                documents: [payload, ...state.documents],
                loading: false,
            };
        case UPDATE_DOCUMENT:
            return {
                ...state,
                documents: state.documents.map((document) =>
                    document.id === payload.id ? payload : document
                ),
                loading: false,
            };
        case DELETE_DOCUMENT:
            return {
                ...state,
                documents: state.documents.filter(
                    (document) => document.id !== payload
                ),
                loading: false,
            };
        case DOCACTIONFAILED:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};
