import { REGISTRATION, LOGIN, LOGOUT, INIT_USER, IS_LOADING, IS_ERROR, CHANGE_SESSION} from '../types'
import axios from 'axios';
axios.defaults.withCredentials = true;

export const isLoading = (data) => ({
  type: IS_LOADING,
})

export const isError = (data) => ({
  type: IS_ERROR,
  payload: data

})
export const registration = (data) => ({
  type: REGISTRATION,
  payload: data
})

export const userRegistration = (payload) => async (dispatch) => { 
  dispatch(isLoading())
  try {
    const { data } = await axios.post('/registration', payload )
    if(data.error){
      dispatch(isError(data))
    }
    else{
    dispatch(registration(data))
    }
  } catch (err) {
    console.log(err);
  }
}


export const login = (data) => ({
  type: LOGIN,
  payload: data
})

export const userLogin = (payload) => async (dispatch) => { 
  dispatch(isLoading())
  try {
    const { data } = await axios.post('/login', payload)
    if(data.error){
      dispatch(isError(data))
    }
    else{
    dispatch(login(data))
  }
  } catch (err) {
    console.log(err);
  }
}

export const logout = (data) => ({
  type: LOGOUT,
})

export const userLogout = (payload) => async (dispatch) => { 
  try {
    await axios('/logout')
    dispatch(logout())
  }
   catch (err) {
    console.log(err);
  }
}


export const sessionCheck = (data) => ({
  type: INIT_USER,
  payload: data
})
export const userSessionCheck = () => async (dispatch) => { 
  try {
    const { data } = await axios('/session')
    dispatch(sessionCheck(data))
  }
   catch (err) {
    console.log(err);
  }
}
export const deletSession = (data) => ({
  type: CHANGE_SESSION,
  payload: data
})
export const deletSessionsAC = () => async (dispatch) => { 
  try {
    dispatch(sessionCheck())
  }
   catch (err) {
    console.log(err);
  }
}
