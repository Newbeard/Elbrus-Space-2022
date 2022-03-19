import axios from "axios";
import { INIT_COUNTRIES, INIT_CITIES } from "../types";


export const initStudents = (users) => ({
  type: INIT_STUDENTS,
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
