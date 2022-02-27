Feature: Add Asset test

    Background:
    User has abbility to Add asset
    The asset name should be unique
    The asset name is a combination of 4 uppercase letters and 10 digitalis

    Scenario: successful add asset
        Given I am on add asset page
        When I input correct asset name
        Then I click "SEND" button
        And i should see "Sucssess"


# Scenario: Unsuccessful add asset
#     Given I am on the "add asset" page
#     When I enter wrong asset format
#     Then I should see a notification saying wrong format
#     And I should be on the "add asset" page

