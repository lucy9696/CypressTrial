// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands'
Cypress.Commands.add('login',(email,password) => {
        cy.visit('https://ypsilon-staging.de/en/log_in')     //launching webpage
        cy.get('#CybotCookiebotDialogBodyLevelButtonAccept').click()
        cy.get('form').within(($form) =>{  
        //accessing within the form unlike normal sign ins, it searches for elements only within the form and not the entire document
        cy.get('input[name = "user[email]"]').type(email)
        cy.get('input[name = "user[password]"]').type(password)
        cy.root().submit() 
    })
})

Cypress.Commands.add('enableCookies',() => {
    cy.visit('https://ypsilon-staging.de/en/log_in')     //launching webpage
    cy.get('#CybotCookiebotDialogBodyLevelButtonAccept').click()
})

Cypress.Commands.add('signUpEmail',(first_name,last_name,email,password,country,country_code) => {
    
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     
     console.log(makeid(5));

    cy.get('form').within(($form) =>{  
        //accessing within the form unlike normal sign ins, it searches for elements only within the form and not the entire document
        cy.get('input[name = "user[first_name]"]').type("cypressUser")
        cy.get('input[name = "user[last_name]"]').type("Test")
        cy.get('input[name = "user[email]"]').type("testing-emails+" + makeid(6) + "@steadyhq.com")
        cy.get('input[name = "user[password]"]').type("cypressUserTest")
        cy.get('select').select("Andorra").should('have.value', "ad")
        cy.get('[type="checkbox"]').check({force: true})
        cy.get('[type="checkbox"]').check({force: true})
        cy.root().submit()})
})

