# test developer task

## Description

This project covers end-to-end test for the app [test-developer-task](https://elinvar.de/)

The project consists of:
- helper -> helper functions for validation, mock, calculations
- integration -> tests feature folder
- support -> custom functions for testing components


## Test-Scenario
- Add Asset test
    - User has abbility to Add asset
    - The asset name should be unique
    - The asset name is a combination of 4 uppercase letters and 10 digitalis
- Read Exisiting Asset test
    - User has ability to see Existing asset
    - Search by asset name
    - Filter by asset name
    - Sort by asset name

## How To Install
### prerequisite
**install browsers: chrome, firefox, edge**  on your machine. By default the Testrunner will use native cypress electron browser (Chrome based browser).
**install** [npx](https://www.npmjs.com/package/npx) if needed

### using npm
` npm i --legacy-peer-deps`

## How To Run Test Locally
### Open Cypress Test Runner
`npm run cy:test` to start API server, frontend, and open cypress test with GUI
or you can also use `cy:run:headless` to run all tests without GUI

you can choose the browser for testing based on installed browsers on your machine.