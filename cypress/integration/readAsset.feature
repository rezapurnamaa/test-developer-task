Feature: Read Exisiting Asset test
    User has abbility to see Existing asset
    Search by asset name
    Filter by asset name
    Sort by asset name

    Background:
        # this step in common
        Given clean database
        Given random asset is created
        Given I am on "/assets" page


    Scenario: Search asset by asset name
        When search asset using "Search"
        Then asset appears on data table

    Scenario: Filter asset by asset name
        When search asset using "Filter"
        Then asset appears on data table

    Scenario: Sort asset by asset name
        When search asset using "Sort"
        Then assets appear sorted




