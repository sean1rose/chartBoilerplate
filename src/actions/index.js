// ****this action creator file is RESPONSIBLE FOR MAKING API REQUESTS*****

import axios from 'axios';


const API_KEY = '7810e14ab82bf0938dec6f64a9991cea';
// example: http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=7810e14ab82bf0938dec6f64a9991cea
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


// constant used for action type (this is to maintain consistency b/w reducer and actions)
export const FETCH_WEATHER = 'FETCH_WEATHER';


// action creator is responsible for making api/ajax request to fetch our weather data
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // request returns a promise, want to pass that into the action as the payload (contains action data)
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}