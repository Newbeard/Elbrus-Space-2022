import { GET_CITY } from "../types"

export function cityReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
  
    case GET_CITY: {
      return payload 
    }

    default: {
      return state
    }
  }

}
