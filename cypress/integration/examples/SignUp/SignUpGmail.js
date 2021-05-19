/// <reference types="cypress" />
describe('User Account using Gmail', () => 
{ 
    it.only('Create new user account', () => {
    cy.visit('https://ypsilon-staging.de/en/sign_up')     //launching Steady webpage
    cy.get('#CybotCookiebotDialogBodyLevelButtonAccept').click() //accepting cookies on page  
    cy.wait(5000)
    cy.get('.btn.btn--secondary.btn--full_width.btn--with_icon:eq(1)').click()      //Using data attribute to select the button
    cy.wait(5000)
    //cy.url().should('include','/en/auth/google?prompt=select_account')
    //Cross origin not supported in Cypress but functionality works. Ignore if you find this message, but the link redirects to Gmail
})
        
})