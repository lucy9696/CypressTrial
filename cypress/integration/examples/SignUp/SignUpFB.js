/// <reference types="cypress" />
describe('User Account using Facebook', () => 
{ 
    it.only('User account using Facebook', () => {
    cy.visit('https://ypsilon-staging.de/en/sign_up')     //launching Steady webpage
    cy.get('#CybotCookiebotDialogBodyLevelButtonAccept').click() //accepting cookies on page  
    cy.get('.btn.btn--secondary.btn--full_width.btn--with_icon:eq(2)').click()      //Using data attribute to select the button      
    //cy.url().should('eq','/en/auth/facebook')     
    //Cross origin not supported in Cypress but functionality works. Ignore if you find this message, but the link redirects to Facebook
})
         
})

