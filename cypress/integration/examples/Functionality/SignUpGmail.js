describe('User Account using Email', () => 
{ 
    it.only('Create new user account', () => {
    cy.visit('https://ypsilon-staging.de/en/sign_up')     //launching Steady webpage
    cy.get('#CybotCookiebotDialogBodyLevelButtonAccept').click() //accepting cookies on page  
    cy.wait(5000)
    cy.get('.btn.btn--secondary.btn--full_width.btn--with_icon:eq(1)').click()      //Using data attribute to select the button
    cy.wait(5000)
    cy.url().should('include','/en/auth/google?prompt=select_account')
})
    it('Delete User account created after test', () => {
    cy.visit('https://ypsilon-staging.de/admin/log_in')       //launching Steadyadmin webpage 
    cy.deleteUser("testing-emails+cypress")                   //Deleting the created user using predefined function under "commands.js"
    cy.wait(3000) //delay of 3s
   })        
})