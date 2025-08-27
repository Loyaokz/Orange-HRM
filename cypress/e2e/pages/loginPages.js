class LoginPage {
    selectorlist() {
       const selectors = {
          usernameField: "[name='username']",
          passwordFIeld: "[name='password']",
          loginButton: "[type='submit']",
          wrongCredentialAlert: "[role='alert']",
       }
       return selectors

    }
    
    accessLoginPage() {
        cy.visit('auth/login')
    }
    loginWithUser(username, password){
        cy.get(this.selectorlist().usernameField).type(username)
        cy.get(this.selectorlist().passwordFIeld).type(password)
        cy.get(this.selectorlist().loginButton).click()
    }
}
export default LoginPage