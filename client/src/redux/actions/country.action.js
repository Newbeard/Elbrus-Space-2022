import axios from "axios";
import { INIT_COUNTRIES } from "../types";


export const initCountries = (countries) => ({
  type: INIT_COUNTRIES,
  payload: countries
})

export const initCountriesFromServer = () => async (dispatch) => {
  try {
    const { data } = await axios('/countries')
    dispatch(initCountries(data))
  } catch (error) {
    console.log(error);
  }
}
