import axios from "axios";
import qs from "qs";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constrants/useConstrants";

export const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = qs.stringify({
      grant_type: "client_credentials",
      client_id: `${user.apiKey}`,
      client_secret: `${user.secret}`,
    });
    // console.log(config);

    const resData = await axios({
      method: "post",
      url: "https://api.petfinder.com/v2/oauth2/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: config,
    });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: resData.data });
    localStorage.setItem("userInfor", JSON.stringify(resData.data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const logout =() => async (dispatch)=>{
    localStorage.removeItem("userInfor")
    dispatch({type:USER_LOGIN_LOGOUT})
}