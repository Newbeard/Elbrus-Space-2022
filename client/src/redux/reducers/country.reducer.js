import { INIT_COUNTRIES } from "../types";

export function countriesReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case INIT_COUNTRIES: {
      return payload
    }
  
    default:
      return state
  }
}
