import React, { Component } from 'react';
import Event from './Event';
import { WarningAlert } from "./Alert";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList">
        {!navigator.onLine ? (
          <WarningAlert text="You are offline! The displayed event list has been loaded from the cache." />
        ) : (
          <WarningAlert text="" />
        )}
        {events.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>
          )}
      </ul>
    );
  }
}

export default EventList;