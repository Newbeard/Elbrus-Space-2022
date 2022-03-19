import { GET_CITY, CITIES_OF_SELECTED_COUNTRY } from "../types"

export function cityReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
  
    case GET_CITY: {
      return payload 
    }
    
    case CITIES_OF_SELECTED_COUNTRY: {
      return payload 
    }

    default: {
      return state
    }
  }

}
