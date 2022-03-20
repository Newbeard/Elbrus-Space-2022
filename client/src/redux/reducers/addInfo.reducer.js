import { ADD_INFO } from "../types";

export function studentsReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case ADD_INFO: {
      return payload
    }
  
    default:
      return state
  }
}
