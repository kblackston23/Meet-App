import React from "react";
import { shallow, mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
import App from "../App";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user has not specified the number, 12 is the default number shown', ({ given, when, then }) => {
    given('no number has been selected', () => {});

    let NumberOfEventsWrapper;
    when('viewing the default list of events', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    then('12 events will be displayed', () => {
      NumberOfEventsWrapper.setState({ numberOfEvents: 12 });
    });
  });

test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;

    given('the user can change the number of events to display', () => {
      AppWrapper = mount(<App />);
    });

    when('the user specifies a number', () => {
      const eventNumberInput = { target: { value: 3 } };
      AppWrapper.find(".numberOfEvents").simulate( "change", eventNumberInput );
    });

    then('that specified number will be displayed', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.setState({ numberOfEvents: 3 });
      expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(3);
    });
  });
});