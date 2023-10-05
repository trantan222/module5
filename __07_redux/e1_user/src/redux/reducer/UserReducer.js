import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
} from "../UserAction";

const initialState = {
    users: [],
    loading: false,
    error: null,
};

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: null,
            };

        case GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case DELETE_USER_SUCCESS:
            const updatedUsers = state.users.filter(
                (user) => user.id !== action.payload
            );
            return {
                ...state,
                users: updatedUsers,
                loading: false,
                error: null,
            };

        case DELETE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default userReducers;
