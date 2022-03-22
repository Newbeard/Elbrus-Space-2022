import axios from "axios";
import { EDIT_PROFILE, INIT_PROFILE} from "../types";


export const initProfile = (users) => ({
  type: INIT_PROFILE,
  payload: users
})

export const initProfileFromServer = () => async (dispatch) => {
  try {
    console.log('initProfileFromServer');
    const { data } = await axios('/profile')
    console.log('init',data);
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
  try {
    console.log('editProfileFromServer');
    const { data } = await axios.put('/profile', payload)
    console.log('edit',data);
    dispatch( editProfile(data))
  } catch (error) {
    console.log(error);
  }
}


export const initStudentFromServer = (payload) => async (dispatch) => {
  try {
    const { data } = await axios('/profile',payload)
    dispatch(initProfile(data))
  } catch (error) {
    console.log(error);
  }
}
