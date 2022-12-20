import constant from "../constants/constants";

export const loginUser = (data) => {
  return {
    type: constant.USER_LOGIN,
    payload: data,
  };
};

export const logoutUser = () => {
  return {
    type: constant.USER_LOGOUT,
  };
};
