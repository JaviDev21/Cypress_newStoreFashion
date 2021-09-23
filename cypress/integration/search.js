describe ('Search elements',()=>{

    beforeEach(()=>{
        cy.visit("/")      
    })

    it('Search for elements whit multiple results', () => {

        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress')
            cy.get(index.searchButton).click()
        })
   
        cy.fixture("searchResults").then((searchResults)=>{
            cy.get(searchResults.titlesearchResult).should('contain','dress')
        })

    });


    it('Search for elements whit no results', () => {
          
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('qwerty')
            cy.get(index.searchButton).click()
        })

        cy.fixture("searchResults").then((searchResults)=>{
            cy.get(searchResults.titlesearchResultAlert).should('contain','No results')
        })

    });

})