export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const getUsersRequest = () => ({
    type: GET_USERS_REQUEST,
});

export const getUsersSuccess = (users) => ({
    type: GET_USERS_SUCCESS,
    payload: users,
});

export const getUsersFailure = (error) => ({
    type: GET_USERS_FAILURE,
    error,
});

export const deleteUserRequest = (userId) => ({
    type: DELETE_USER_REQUEST,
    payload: userId,
});

export const deleteUserSuccess = (userId) => ({
    type: DELETE_USER_SUCCESS,
    payload: userId,
});

export const deleteUserFailure = (error) => ({
    type: DELETE_USER_FAILURE,
    error,
});
