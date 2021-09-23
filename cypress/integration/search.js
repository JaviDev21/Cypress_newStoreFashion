describe ('Search elements',()=>{

    beforeEach(()=>{
        cy.visit("/")      
    })

    it('Search for elements whit multiple results', () => {

        cy.search('dress')
        cy.searchResults('dress')
        
    });


    it('Search for elements whit no results', () => {
          
        cy.search('qwerty')
        cy.searchResultsAlert('No results')
        
    });

})