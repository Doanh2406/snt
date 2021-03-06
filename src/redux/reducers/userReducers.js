import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constrants/useConstrants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: false,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfor: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: true,
        error: action.payload,
      };
    case USER_LOGIN_LOGOUT:
      return {};

    default:
      return state;
  }
};
