import React, { Component } from 'react';

class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: 12
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 12) {
      this.setState({
      });
    } else {
      this.setState({
        numberOfEvents: number
      });
    }
  };


  render() {
    return(
      <div className="NumberOfEvents">
        <input type="number" className="numberOfEvents" value={this.state.numberOfEvents} onChange={this.handleInputChanged} />
      </div>
    )
  }};
export default NumberOfEvents;
