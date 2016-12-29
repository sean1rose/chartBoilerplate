// *** NOTES ON CONNECTING A COMPONENT TO REDUX***

import React, { Component } from 'react';
// 1@@. need to connect component to redux... 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// 2@@. need to hook up imported actionCreator to this searchbar component (how? by defining mapDispatchToProps)
import { fetchWeather } from '../actions/index';

/*
A) want to make input a "controlled field" - form element where value of input is set by state of component (and not the other way around)
  HOW? -> set state whenever our input is changed (update state using a change handler on the input)
    1. assign value so value is originated from this.state
    2. add onChange event handler: whenever on change -> run function
B) want to make this component a CONTAINER - need to hook it up to redux cuz running a search is going to call a redux action-creator
  1@@. need to connect our searchbar container to redux using CONNECT from 'react-redux' 
  2@@. need to bind actioncreator fetchWeather as a PROPerty to this container
*/

// make sure not to export at this point
class SearchBar extends Component {
  // to set state up, initialize inside of our constructor... 
  constructor(props) {
    super(props);

    // value of input will be mapped to this.state.term
    this.state = { term: '' };

    // searchbar (this) has a func called onInputChange -> bind that func to this and then replace it w/ bound instance of the func
    this.onInputChange = this.onInputChange.bind(this);
    // ^ necessary cuz we're passing a callback that has a reference to 'this'
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event) {
    // don't submit the form
    event.preventDefault();
    
    // we need to go and fetch weather data (pass in city to search weather api)
    this.props.fetchWeather(this.state.term);
    // ^ ***this is only possible cuz of 2 step process (connect + bindActionCreators + mapDispatchToProps below)

    // clear out search input after search
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast for your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

// ***bind actionCreator (fetchWeather) to dispatch, and then map it to props -> gives this component access to 'this.props.fetchWeather'
function mapDispatchToProps(dispatch) {
  // causes the actionCreator, whenever called, to flow down into the middleware and reducers inside of redux app 
  return bindActionCreators({ fetchWeather }, dispatch);
}

// use null mapDispatchToProps needs to be the 2nd argument (this component doesn't care about state)
export default connect(null, mapDispatchToProps)(SearchBar);
// this gives component access to the action creator
