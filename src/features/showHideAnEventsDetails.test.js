import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mockData } from '../mock-data';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from "../Event";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event is collapsed by default', ({ given, when, then }) => {
    given("The user has not done anything", () => {});

    when('there is a list of events but nothing is clicked', () => {
      let EventListWrapper;
      EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find(".EventList")).toHaveLength(1);
    });
    
    then('the details of each event will be collapsed', () => {
      let EventWrapper;
      EventWrapper = shallow(<Event event={mockData[0]} />);
      expect(EventWrapper.state("collapsed")).toBe(true);
    });
  });

test('User can expand an event to see its details', ({ given, when, then }) => {
    let EventWrapper;

    given('the user has selected an event they would like details of from the list', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      expect(EventWrapper.state("collapsed")).toBe(true);
    });

    when('the user clicks on the event', () => {
      const showDetailsButton = EventWrapper.find(".show-details");
      showDetailsButton.simulate("click");
    });

    then('the event details expand', () => {
      expect(EventWrapper.state("collapsed")).toBe(false);
    });
  });


test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let EventWrapper;

    given('the user saw the details of event selected', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.setState({ collapsed: false });
    });

    when('they are done viewing details, the event is clicked', () => {
      const HideDetailsButton = EventWrapper.find(".hide-details");
      HideDetailsButton.simulate("click");
    });

    then('the event will collapse again to hide its details', () => {
      expect(EventWrapper.state("collapsed")).toBe(true);
    });
  });
});