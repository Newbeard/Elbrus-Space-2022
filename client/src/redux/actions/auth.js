import { REGISTRATION, LOGIN, LOGOUT, INIT_USER, IS_LOADING, LOGIN_ERROR, REGISTRATION_ERROR} from '../types'
import axios from 'axios';
axios.defaults.withCredentials = true;

export const isLoading = (user) => ({
  type: IS_LOADING,
})

export const registration = (user) => ({
  type: REGISTRATION,
  payload: user
})

export const userRegistration = (payload) => async (dispatch) => { 
  dispatch(isLoading())
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

export const userLogin = (payload) => async (dispatch) => { 
  dispatch(isLoading())
  try {
    const { data } = await axios('/login', payload)
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
