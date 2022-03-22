import { INIT_STUDENT, DELETE_STUDENT } from "../types";

export function oneStudentReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case INIT_STUDENT: {
      return payload
    }
    
    case DELETE_STUDENT: {
      return {}
    }

    default:
      return state
  }
}
