export class LoginPage {
    navigateToLogin() {
        cy.visit('https://www.letskodeit.com/login')
    }

    enterEmailAddress(email) {
        cy.get('#email').type(email);
    }

    enterPassword(email) {
        cy.get('#login-password').type(email);
    }
    
    clickLoginButton() {
        cy.get('#login').click();
    }

    getTitle() {
        return cy.title();
    }

    verifyEmailRequiredError(){
        cy.get('.error').should('have.text','Incorrect login details. Please try again.The email field is required.')
    }

    verifyIcorrectCredentialsError() {
        cy.get('#incorrectdetails').should('have.text','Incorrect login details')
    }

    loginToApp(email,password) {
        login.enterEmailAddress(email);
        login.enterPassword(password);
        login.clickLoginButton();
    }
}
export const login = new LoginPage();