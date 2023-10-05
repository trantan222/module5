import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
} from "../UserAction";
function getUsersApi() {
    return axios.get("http://localhost:8080/user");
}
function deleteUserApi(userId) {
    return axios.delete(`http://localhost:8080/user/${userId}`);
}
function* getUsersSaga() {
    try {
        const response = yield call(getUsersApi);
        const users = response.data;
        yield put({ type: GET_USERS_SUCCESS, payload: users });
    } catch (error) {
        yield put({ type: GET_USERS_FAILURE, error });
    }
}
function* deleteUserSaga(action) {
    try {
        yield call(deleteUserApi, action.payload);
        yield put({ type: DELETE_USER_SUCCESS, payload: action.payload });
    } catch (error) {
        yield put({ type: DELETE_USER_FAILURE, error });
    }
}
function* userSagas() {
    yield takeLatest(GET_USERS_REQUEST, getUsersSaga);
    yield takeLatest(DELETE_USER_REQUEST, deleteUserSaga);
}

export default userSagas;
