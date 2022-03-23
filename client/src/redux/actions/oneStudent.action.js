import axios from "axios";
import { INIT_STUDENT, DELETE_STUDENT} from "../types";


export const initStudent = (student) => ({
  type: INIT_STUDENT,
  payload: student
})
export const deleteStudent = () => ({
  type: DELETE_STUDENT,
})


export const initStudentFromServer = (payload) => async (dispatch) => {
  try {
    // dispatch(deleteStudent())
    const { data } = await axios.post('/student', {id: payload})
    dispatch(initStudent(data))
  } catch (error) {
    console.log(error);
  }
}
