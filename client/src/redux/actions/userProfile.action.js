import axios from "axios";
import { EDIT_PROFILE, INIT_PROFILE} from "../types";


export const initProfile = (users) => ({
  type: INIT_PROFILE,
  payload: users
})

export const initProfileFromServer = () => async (dispatch) => {
  try {
    const { data } = await axios('/profile')
    dispatch(initProfile(data))
  } catch (error) {
    console.log(error);
  }
}

export const editProfile = (users) => ({
  type: EDIT_PROFILE,
  payload: users
})

export const editProfileFromServer = (payload) => async (dispatch) => {
  console.log(payload);
  try {
    const { data } = await axios.put('/profile', payload)
    console.log(data);
    dispatch( editProfile(data))
  } catch (error) {
    console.log(error);
  }
}


