import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

const correctAsset = makeId(4) + generateTenRandomNumber();
const wrongAsset = makeId(3) + generateTenRandomNumber();
let inputAsset = ''

Given('I am on {string} page', (url) => {
    cy.visit(url)
})

When('I input {string} asset name', (asset) => {
    switch(asset) {
        case 'correct':
            inputAsset = correctAsset
            cy.getByLabel('New Asset').type(`${inputAsset}`)
            break;
        case 'wrong':
            inputAsset = wrongAsset
            cy.getByLabel('New Asset').type(`${inputAsset}`)
            break;
        default:
            cy.log("empty input Asset")
    }
    
});


And('I click {string} button', (text) => {
    cy.findByRole('button', {label: text}).focus().click()
});

Then('I should see {string}', function (expectedText) {
    if(expectedText === "Correct format") {
        cy.getDataTestModal('modal-body').should('be.visible').contains(expectedText).contains(inputAsset)
    } else {
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains(expectedText);
         })
    }
    
});

function generateTenRandomNumber() {
    return Math.floor(1000000000 + Math.random() * 9000000000);
}

function makeId(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

