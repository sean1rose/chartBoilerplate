// this slice of the reducer -> make sure it's imported in main index.js root-reducer

import { FETCH_WEATHER } from '../actions/index';
// what is our initial data structure gonna be? user can query for any city. And we're gonna show multiple rows of graphs
  // so we'll prob want to store in an array -> make default state
export default function(state = [], action) {
  // REDUX RULE: NEVER directly MUTATE state. Instead, need to return a new version of our state ('concat' rather than 'push')
  switch (action.type) {
    case FETCH_WEATHER:
      // placing this inside of an array cuz we're gonna have multiple cities that we're handling...
      // but need to add to current already existing state (not mutate and replace existing state)...
      // possible answer: 
        /// return state.concat([action.payload.data])
      // OR...
      return [ action.payload.data, ... state ] // [city, city, city] NOT [ city, [city, city] ]
      // ^ this inserts new entry at the front of the array
  }

  return state;
} 