/// <reference types="cypress" />
import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I am on {string} page', (url) => {
    cy.visit(url)
})