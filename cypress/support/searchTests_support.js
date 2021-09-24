

Cypress.Commands.add('search',(value)=>{
    cy.fixture('searchTests_fixtures').then((search)=>{
        cy.get(search.searchBox).type(value)
        cy.get(search.searchButton).click()
    })
})
Cypress.Commands.add('searchResults',(value)=>{
    cy.fixture("searchTests_fixtures").then((searchResult)=>{
        cy.get(searchResult.titlesearchResult).should('contain',value)
    })
})
Cypress.Commands.add('searchResultsAlert',(value)=>{
    cy.fixture("searchTests_fixtures").then((searchResultAlert)=>{
        cy.get(searchResultAlert.titlesearchResultAlert).should('contain',value)
    })
})
