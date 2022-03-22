import { GET_CITY, CITIES_OF_SELECTED_COUNTRY,GET_ARR_CITY } from "../types"

export function cityReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
  
    case GET_CITY: {
      return payload 
    }
    
    case CITIES_OF_SELECTED_COUNTRY: {
      return payload 
    }
    case GET_ARR_CITY: {
      return payload 
    }

    default: {
      return state
    }
  }

}
