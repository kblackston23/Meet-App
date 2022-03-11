Feature: Show or hide event details

Scenario: An event is collapsed by default
Given the user has not done anything
When there is a list of events but nothing is clicked
Then the details of each event will be collapsed

Scenario: User can expand an event to see its details
Given the user has selected an event they would like details of from the list
When the user clicks on the event
Then the event details expand

Scenario: User can collapse an event to hide its details
Given the user saw the details of event selected
When they are done viewing details, the event is clicked
Then the event will collapse again to hide its details
