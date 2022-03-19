import axios from "axios";
import { INIT_COUNTRIES } from "../types";


export const initStudents = (users) => ({
  type: INIT_COUNTRIES,
  payload: users
})

export const initStudentsFromServer = () => async (dispatch) => {
  try {
    const { data } = await axios('/search')
    dispatch(initStudents(data))
  } catch (error) {
    console.log(error);
  }
}
