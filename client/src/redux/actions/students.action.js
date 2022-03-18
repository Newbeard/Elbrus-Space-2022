import axios from "axios";
import { FILTER_STUDENTS, INIT_STUDENTS } from "../types";


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

export const filterStudents = (users) => ({
  type: FILTER_STUDENTS,
  payload: users
})

export const filterStudentsFromServer = (payload) => async (dispatch) => {
  try {
    const { data } = await axios.post('/search', payload)
    dispatch(initStudents(data))
  } catch (error) {
    console.log(error);
  }
}


