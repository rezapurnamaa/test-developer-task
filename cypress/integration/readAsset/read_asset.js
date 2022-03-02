import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import {generateTenRandomNumber, makeId, setupIntercept, validateSorting } from '../../fixtures/common'

let inputAsset = ''
let assetId = ''
let assetNumber = ''
let assetNames = []

Given('clean database', () => {
    cy.exec('rm -f api/test5.db')
});

Given('random asset is created', () => {
    for(var i = 0; i < 5; i++) {
        assetId = makeId(4)
        assetNumber = generateTenRandomNumber()
        inputAsset = assetId + assetNumber
        assetNames.push(inputAsset)
        cy.request('POST', `localhost:3000/addAsset/${inputAsset}`)
    }
    setupIntercept(inputAsset, 201)
});

When('search asset using {string}', (text) => {
    switch (text) {
        case 'Search':
            cy.getDataTest('datatable-input').type(inputAsset)
            break;
        case 'Filter':
            cy.getDataTest('datatable-input').type(assetId)
            break;
        case 'Sort':
            cy.getDataTest('datatable-head').get('.sorting').click()
            break;
    }
});

Then('asset appears on data table', () => {
    cy.getDataTest('table-body').contains(inputAsset)
    assetNames = []
});

Then('assets appear sorted', () => {
    let sortedAssetNames = []
    cy.getDataTest('datatable-head').get('.sorting_asc').should('exist')
    cy.getDataTest('table-body').get('td').each((element) => {
        sortedAssetNames.push(element.text())
    })
    cy.log('**Unsorted assets**: ').then(() => {
        for (const asset of assetNames) {
            cy.log(asset)
        }
    })
    cy.log('**Sorted assets**: ').then(() => {
        for (const asset of sortedAssetNames) {
            cy.log(asset)
        }
    }).then(() => {
        validateSorting(assetNames, sortedAssetNames);

    })
    
});
