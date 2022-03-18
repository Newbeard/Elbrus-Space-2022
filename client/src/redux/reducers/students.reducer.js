import { FILTER_STUDENTS, INIT_STUDENTS } from "../types";

export function studentsReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case INIT_STUDENTS: {
      return payload
    }

    case FILTER_STUDENTS: {
      return payload
    }
  
    default:
      return state
  }
}
