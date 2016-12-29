// This is where we will be rendering our TABLE OF CHARTS (using react-sparklines)

// WHY A CONTAINER? cuz this is rendering a list of cities - it needs access to redux state...
  // since it's a container -> need to hook it up to redux and subscribe to store so can pull in weather data
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  // for rendering a single city/row
  renderWeather(cityData) {
    // this is being called on the array.map
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    console.log('temps - ', temps);


    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="red" />
        </td>
      </tr>
    )
  }

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
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// do NOT need bindActionCreators, not binding dispatch
// function mapDispatchToProps(dispatch) {
//   return 
// }

// Mapping state to props gives us access to 'this.props.weather' inside of this container...
  // key of object returned -> name of the slice of the reducer where we're pulling state from (check the rootreducer's key)
const mapStateToProps = ({ weather }) => {
  // why 'weather' key? -> check reducers/index.js -> rootReducer binds weather reducer to the 'weather' key
  // weather property is going to be an array of city-objects -> want to map over that array in the above table
    // https://www.udemy.com/react-redux/learn/v4/t/lecture/4284608 @ 1:45
  return {
    weather
  };
}
// ^ ...SAME AS...
// function mapStateToProps(state) {
//    return {weather: state.weather}
// }

export default connect(mapStateToProps)(WeatherList);
