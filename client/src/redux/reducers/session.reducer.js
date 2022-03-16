import { INIT_USER } from '../types'

export function sessionReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
  
    case INIT_USER: {
      return payload 
    }

    default: {
      return state
    }
  }

}
