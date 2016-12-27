import React, { Component } from 'react';

// want to make input a "controlled field" - form element where value of input is set by state of component (and not the other way around)
  // HOW? -> set state whenever our input is changed (update state using a change handler on the input)
    // 1. assign value so value is originated from this.state
    // 2. add onChange event handler: whenever on change -> run function

export default class SearchBar extends Component {
  // to set state up, initialize inside of our constructor... 
  constructor(props) {
    super(props);

    // value of input will be mapped to this.state.term
    this.state = { term: '' };

    // searchbar (this) has a func called onInputChange -> bind that func to this and then replace it w/ bound instance of the func
    this.onInputChange = this.onInputChange.bind(this);
    // ^ necessary cuz we're passing a callback that has a reference to 'this'
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event) {
    // don't submit the form
    event.preventDefault();

    // we need to go and fetch weather data
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