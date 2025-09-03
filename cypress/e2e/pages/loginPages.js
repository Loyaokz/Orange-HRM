class LoginPage {
    selectorslist() {
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
    loginWithAnyUser(username, password){
        cy.get(this.selectorslist().usernameField).type(username)
        cy.get(this.selectorslist().passwordFIeld).type(password)
        cy.get(this.selectorslist().loginButton).click()
    }

    checkAccessInvalid(){
        cy.get(this.selectorslist().wrongCredentialAlert)
    }
}
export default LoginPage