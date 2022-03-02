export function generateTenRandomNumber() {
    return Math.floor(1000000000 + Math.random() * 9000000000);
}

export function makeId(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

export function setupIntercept(assetId, status) {
    cy.log("setup intercept to POST request.").then(() => {       
        cy.intercept('POST', `/addAsset/${assetId}`, {
            statusCode: status,
        }).as("interceptAddAsset")
    })
}

export function validateSorting(notSortedAssetNames, sortedAssetNames) {
    const sortingSeedAssets = notSortedAssetNames.sort((previousAsset, nextAsset) => {
        if (previousAsset < nextAsset) { return -1; }
        if (previousAsset > nextAsset) { return 1; }
    });

    expect(sortingSeedAssets, 'Assets are sorted alphabetically').to.deep.equal(sortedAssetNames);
}