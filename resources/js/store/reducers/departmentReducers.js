import {
    GET_DEPARTMENTS,
    GET_DEPARTMENT,
    CREATE_DEPARTMENT,
    UPDATE_DEPARTMENT,
    DELETE_DEPARTMENT,
    DEPACTIONFAILED,
} from "../constants/departmentConstants";

const initialState = { departments: [], department: null, loading: true };

const departmentReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_DEPARTMENTS:
            return {
                ...state,
                departments: payload,
                loading: false,
            };
        case GET_DEPARTMENT:
            return {
                ...state,
                department: payload,
                loading: false,
            };
        case CREATE_DEPARTMENT:
            return {
                ...state,
                departments: [payload, ...state.departments],
                loading: false,
            };
        case UPDATE_DEPARTMENT:
            return {
                ...state,
                departments: state.departments.map((department) =>
                    department.id === payload.id ? payload : department
                ),
                loading: false,
            };
        case DELETE_DEPARTMENT:
            return {
                ...state,
                departments: state.departments.filter(
                    (department) => department.id !== payload
                ),
                loading: false,
            };
        case DEPACTIONFAILED:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default departmentReducer;
