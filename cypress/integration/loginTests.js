describe('LoginTests',()=>{
    beforeEach(()=>{
        cy.visit("/")      
    })

    it('Login with incorrect email', () => {
        cy.login('asfhfd','asdfasd','Invalid email address.')
    });


})