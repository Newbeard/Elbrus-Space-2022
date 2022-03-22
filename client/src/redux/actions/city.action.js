import { GET_CITY, CITIES_OF_SELECTED_COUNTRY, GET_ARR_CITY } from "../types";
import axios from 'axios';
axios.defaults.withCredentials = true;

export const getCities = (city) => {
  return {
    type: GET_CITY,
    payload: city
  }
}
export const getCity = () => async (dispatch) => {
  try {
    const { data } = await axios('/cities')
  
    dispatch(getCities(data))
  } catch (err) {
    console.log(err);
  }
}
export const getArrCity = async (array) => {

return {
  type: GET_ARR_CITY,
  payload: array
}
}
export const getArrcity = () => async (dispatch) => {
  try {
    const { data } = await axios('/getcoord')
  
    dispatch(getCities(data))
}catch (err) {
  console.log(err);
  

}
}
export const getCitiesOfSelectedCountry = (country) => {
  return {
    type: CITIES_OF_SELECTED_COUNTRY,
    payload: country
  }

}

export const getCitiesOfSelectedCountryFromServer = (country) => async (dispatch) => {
  try {
    const { data } = await axios.post('/cities', country)
    dispatch(getCitiesOfSelectedCountry(data))
  } catch (err) {
    console.log(err);
  }
}
