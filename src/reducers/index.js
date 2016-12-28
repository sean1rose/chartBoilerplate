// main hub of all reducers, we will be combining them all here...
import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
