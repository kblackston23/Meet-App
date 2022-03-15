import React, { Component } from 'react';
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: 32,
    errorText: "",
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 32) {
      this.setState({
        numberOfEvents: "",
        errorText: "Enter number between 1 and 32",
      });
    } else {
      this.setState({
        numberOfEvents: number,
        errorText: "",
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
  };


  render() {
    return(
      <div className="NumberOfEvents">
            <input type="number" className="numberOfEvents" value={this.state.numberOfEvents} onChange={this.handleInputChanged} />
            <ErrorAlert text={this.state.errorText} />
          </div>
    )
  }};
export default NumberOfEvents;
