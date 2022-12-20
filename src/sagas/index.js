import { call, put, takeEvery } from "redux-saga/effects";
import constant from "../constants/constants";
import { loginUser } from "../lib/api";

function* _loginUser(action) {
  try {
    const response = yield call(loginUser, action.payload);
    yield put({
      type: constant.USER_LOGIN_SUCCESS,
      response: response.data,
    });
  } catch (e) {
    yield put({
      type: constant.USER_LOGIN_FAIL,
      response: e.response,
    });
  }
}

export function* Saga() {
  yield takeEvery(constant.USER_LOGIN, _loginUser);
}
