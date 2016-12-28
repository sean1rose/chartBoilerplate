// WHY A CONTAINER? cuz this is rendering a list of cities - it needs access to redux state...
  // since it's a container -> need to hook it up to redux and subscribe to store so can pull in weather data
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>

        <tbody>
        
        </tbody>
      </table>
    );
  }
}

// do NOT need bindActionCreators, not binding dispatch
// function mapDispatchToProps(dispatch) {
//   return 
// }

// Mapping state to props - > return an object
  // key -> name of the slice of the reducer where we're pulling state from (check the rootreducer's key)
const mapStateToProps = ({ weather }) => {
  // why 'weather' key? -> check reducers/index.js -> rootReducer binds weather reducer to the 'weather' key
  return {
    weather
  };
}
// ^ ...SAME AS...
// function mapStateToProps(state) {
//    return {weather: state.weather}
// }

export default connect(mapStateToProps)(WeatherList);