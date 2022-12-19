import constant from "../constants/constants";

const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case constant.USER_LOGIN:
      newState = { ...state, isLoggedIn: true };
      return newState;

    default:
      return state;
  }
};

export default authReducer;
