import constant from "../constants/constants";

export const loginUser = () => {
  return {
    type: constant.USER_LOGIN,
  };
};
