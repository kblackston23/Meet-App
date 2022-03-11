Feature: Specify number of events

Scenario: When user has not specified the number, 12 is the default number shown
Given no number has been selected
When viewing the default list of events
Then 12 events will be displayed

Scenario: User can change the number of events they want to see
Given the user can change the number of events to display
When the user specifies a number
Then that specified number will be displayed