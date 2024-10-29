import { login } from "../support/pages/loginPage"
describe('login page Test suite',()=>{
    let loginData;
    before('To initialize data from fixture',()=>{
        cy.fixture('login_data').then((data)=>{
            loginData = data;
        })
    });

    beforeEach('navigated to the base url to login',()=>{
        login.navigateToLogin();
    });

    it('Login with valid credenatials and logout',()=>{
        cy.login(loginData.testid1.email,loginData.testid1.password);
        //cy.login('saifulla.attar5227@gmail.com','S@!f23755')
        cy.logout();

    });

    it('login with empy username',()=>{
        /* login.enterEmailAddress('{backspace}')
        login.enterPassword('S@!f23755',)
        login.clickLoginButton() 
        login.loginToApp('{backspace}','S@!f23755') */
        login.loginToApp(loginData.testid2.email,loginData.testid2.password)
        login.verifyEmailRequiredError();

    });

    it('login with invalid credentials',()=>{
        /* login.enterEmailAddress('saifulla@GMAIL.COM')
        login.enterPassword('S@!f23755')
        login.clickLoginButton() 
        login.loginToApp('saifulla@GMAIL.COM','S@!f23755') */
        login.loginToApp(loginData.testid3.email,loginData.testid3.password)
        login.verifyIcorrectCredentialsError();

    });
})