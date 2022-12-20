import constant from "../constants/constants";
import { flushUserState } from "../util";

const initialState = {
  isLoggedIn: localStorage.getItem("accessToken") ? true : false,
  authError: "",
  loader: false,
};

const authReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    // Reducer for handling user login process
    case constant.USER_LOGIN:
      newState = { ...state, loader: true };
      return newState;

    case constant.USER_LOGIN_SUCCESS:
      newState = { ...state, isLoggedIn: true, loader: false };
      localStorage.setItem("accessToken", action.response.accessToken);
      return newState;

    case constant.USER_LOGIN_FAIL:
      newState = { ...state, authError: action.response, loader: false };
      return newState;

    // Reducer for handling user logout
    case constant.USER_LOGOUT:
      newState = { ...state, isLoggedIn: false };
      flushUserState();
      return newState;

    default:
      return state;
  }
};

export default authReducer;
