import { REGISTRATION, LOGIN, LOGOUT, INIT_USER} from '../types'
import axios from 'axios';
axios.defaults.withCredentials = true;

export const registration = (user) => ({
  type: REGISTRATION,
  payload: user
})

export const userRegistration = (payload) => async (dispatch) => { 
  try {
    const { data } = await axios.post('/registration', payload )
console.log(data);
    dispatch(registration(data))
  } catch (err) {
    console.log(err);
  }
}


export const login = (user) => ({
  type: LOGIN,
  payload: user
})

export const userLogin = () => async (dispatch) => { 
  try {
    const { data } = await axios('/login')
console.log(data);
    dispatch(login(data))
  } catch (err) {
    console.log(err);
  }
}

export const logout = (user) => ({
  type: LOGOUT,
  payload: user
})

export const sessionCheck = (user) => ({
  type: INIT_USER,
  payload: user
})
