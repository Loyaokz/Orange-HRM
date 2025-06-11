import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

const selectorlist = {
  usernameField: "[name='username']",
  passwordFIeld: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid: '.orangehrm-dashboard-grid',
  wrongCredentialAlert: "[role='alert']",

}
  

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorlist.passwordFIeld).type(userData.userSuccess.password)
    cy.get(selectorlist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorlist.dashboardGrid)

  })
  it('Login - Failed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameField).type(userData.userFail.username)
    cy.get(selectorlist.passwordFIeld).type(userData.userFail.password)
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.wrongCredentialAlert)
  })
})