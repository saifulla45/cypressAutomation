describe('No Framework Suite',()=>{
    it('should login to app using valid credentials',()=>{
        cy.visit('https://www.letskodeit.com/login')
        cy.login('saifulla.attar5227@gmail.com',"S@!f23755")
        cy.get('#dropdownMenu1').click();                                                                                              
        cy.contains('Logout').click();
    })

    it('should not login to app using empty Username',()=>{
        cy.visit('https://www.letskodeit.com/login')
        cy.get('#email').type("{backspace}");
        cy.get('#login-password').type("S@!f23755");
        cy.get('#login').click();
        cy.get('.error').should('have.text','Incorrect login details. Please try again.The email field is required.')

    })

    it('should not login to app using invalid credentials',()=>{
        cy.visit('https://www.letskodeit.com/login')
        cy.get('#email').type("saifulla.attar@gmail.com");
        cy.get('#login-password').type("saif236789");
        cy.get('#login').click();
        cy.get('#incorrectdetails').should('have.text','Incorrect login details')
    })
})