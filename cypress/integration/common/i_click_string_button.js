/// <reference types="cypress" />
import { And } from 'cypress-cucumber-preprocessor/steps';

And('I click {string} button', (text) => {
    cy.findByRole('button', {label: text}).focus().click()
});