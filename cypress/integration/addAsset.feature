Feature: Add Asset test
    User has abbility to Add asset
    The asset name should be unique
    The asset name is a combination of 4 uppercase letters and 10 digitalis

    Background: Before Each
        # this step in common
        Given I am on "/add" page

    Scenario: Unsuccessful add empty asset
        When I input "empty" asset name
        And I click "SEND" button
        Then I should see "Please fill in the field"

    Scenario: Unsuccessful add asset
        When I input "wrong" asset name
        And I click "SEND" button
        Then I should see "Please match the format request"

    Scenario: successful add asset
        When I input "correct" asset name
        And I click "SEND" button
        Then I should see "added to the list"

    Scenario: add asset with no database connection
        When I input "correct" asset name
        And The database is not available
        And I click "SEND" button
        Then I should see "Response status code: 403"
