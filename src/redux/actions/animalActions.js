import axios from "axios";
import {
  ANIMAL_LIST_FAIL,
  ANIMAL_LIST_REQUEST,
  ANIMAL_LIST_SUCCESS,
} from "../constrants/animalConstrans";

export const listAnimal = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ANIMAL_LIST_REQUEST });

    const {
      userLogin: { userInfor },
    } = getState();
    const config = "";

    const resData = await axios({
      method: "get",
      url: "https://api.petfinder.com/v2/animals?type=dog",
      headers: {
        Authorization: `Bearer ${userInfor.access_token}`,
      },
      data: config,
    });
    dispatch({ type: ANIMAL_LIST_SUCCESS, payload: resData.data });
  } catch (error) {
    dispatch({
      type: ANIMAL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
