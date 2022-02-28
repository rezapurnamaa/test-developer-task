import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import {generateTenRandomNumber, makeId, setupIntercept} from '../../fixtures/common'

let inputAsset = ''

Given('I am on {string} page', (url) => {
    cy.visit(url)
})

When('I input {string} asset name', (asset) => {
    switch(asset) {
        case 'correct':
            inputAsset = makeId(4) + generateTenRandomNumber();
            cy.getByLabel('New Asset').type(`${inputAsset}`)
            break;
        case 'wrong':
            inputAsset = makeId(3) + generateTenRandomNumber();
            cy.getByLabel('New Asset').type(`${inputAsset}`)
            break;
        default:
            cy.log("empty input Asset")
    }
    
});


And('I click {string} button', (text) => {
    cy.findByRole('button', {label: text}).focus().click()
});

And('The database is not available', () => {
    setupIntercept(inputAsset)
});

Then('I should see {string}', function (expectedText) {

    switch(expectedText) {
        case 'added to the list':
            cy.getDataTestModal('modal-body').should('be.visible').contains(expectedText).contains(inputAsset)
            break;
        case 'Response status code: 403':
            cy.get('@interceptAddAsset').its('response').then((res) => {
                expect(res.statusCode).to.eq(403)
            })
            break;
        default:
            cy.on('window:alert',(txt)=>{
                expect(txt).to.contains(expectedText);
             }).screenshot()
    }
});
