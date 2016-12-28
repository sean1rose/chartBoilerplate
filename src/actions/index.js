// ****this action creator file is RESPONSIBLE FOR MAKING API REQUESTS (want to call it whenever user submits search bar form*****

import axios from 'axios';


const API_KEY = '7810e14ab82bf0938dec6f64a9991cea';
// example: http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=7810e14ab82bf0938dec6f64a9991cea
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


// constant used for action type (this is to maintain consistency b/w reducer and actions)
export const FETCH_WEATHER = 'FETCH_WEATHER';
// ^ will be imported in reducer


// action creator is responsible for making api/ajax request to fetch our weather data (this action is asynchranous in nature, but middleware helps clean that up)
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // request returns an axios promise, want to pass that into the action as the payload (contains action data)
  const request = axios.get(url);

  // console.log('request - ', request);

  // note that we are returning the ACTUAL PROMISE AS THE PAYLOAD...
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}