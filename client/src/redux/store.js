import { createStore } from 'redux'
import { rootReducer } from './reducers/root.reducer'
import { composeWithDevTools } from '@redux-devtools/extension';


const initialState = {
  user: {},
  session: {}
}

export const store = createStore(rootReducer, initialState, composeWithDevTools())
