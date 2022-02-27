import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

const randomAsset = "ISIN" + generateTenRandomNumber();

Given('I am on add asset page', () => {
    cy.visit("/add")
})

When('I input correct asset name', () => {
    cy.getByLabel('New Asset').type(`${randomAsset}`)
});

Then('I click {string} button', (text) => {
    cy.findByRole('button', {label: text}).click()


});
And('i should see {string}', function (expectedText) {
    cy.get('[data-test="modal"]',{withinSubject:null}).should('be.visible').contains(expectedText)
    cy.get('[data-test="modal-body"]',{withinSubject:null}).should('be.visible').contains(randomAsset)
});

function generateTenRandomNumber() {
    return Math.floor(1000000000 + Math.random() * 9000000000);
}
