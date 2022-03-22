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
    dispatch(deleteStudent())
    console.log(2,payload);
    const { data } = await axios.post('/student', {id: payload})
    console.log(1, data);
    dispatch(initStudent(data))
    console.log(22222);
  } catch (error) {
    console.log(error);
  }
}
