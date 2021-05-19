
describe('Delete Functionality', () => 
{ 
    it('Delete Publication', () => {
    cy.login("anet@steadyhq.com","NötreDäme")
    cy.visit('https://ypsilon-staging.de/en/backend/settings/account/edit')
    const text1
    cy.get('.sr_only').invoke('text').then((text1) => {
        expect(text1).to.eq()  // Expect function for assertion between a string
    })

    if(cy.get('a.inline_link').contains('Click here to manage your memberships.'))
    {
        cy.get('a[href="https://ypsilon-staging.de/en/backend/settings/memberships"]').click()
        cy.url().should('include', Cypress.config().baseUrl + publicationName + '/posts')
        cy.get('a[href="https://ypsilon-staging.de/en/explain"]').should('include', publicationName).should('include','/posts')
    
    }
    else
    {}

    
   })        
})