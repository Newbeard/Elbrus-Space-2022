import { EDIT_PROFILE, INIT_PROFILE} from "../types";

export function userProfileReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    
    case EDIT_PROFILE: {
      return payload
    }

    case INIT_PROFILE: {
      return payload
    }
  
    default:
      return state
  }
}
