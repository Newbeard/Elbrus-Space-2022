import { FILTER_STUDENTS, INIT_STUDENTS, SEARCH_STUDENTS } from "../types";

export function studentsReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case INIT_STUDENTS: {
      return payload
    }

    case FILTER_STUDENTS: {
      return payload
    }

    case SEARCH_STUDENTS: {
      console.log(payload);
      const regex = new RegExp(`^${payload}`, 'i')
      const newState = state.filter((student) => regex.test(student.name))
      console.log(newState);
      return newState
    }
  
    default:
      return state
  }
}
