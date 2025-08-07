import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

const selectorlist = {
  usernameField: "[name='username']",
  passwordFIeld: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid: '.orangehrm-dashboard-grid',
  wrongCredentialAlert: "[role='alert']",
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-dd-mm']",
  submitButton: "[type='submit']",

}
  

  it.only('User info update - Success', () => {
    cy.visit('auth/login')
    cy.get(selectorlist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorlist.passwordFIeld).type(userData.userSuccess.password)
    cy.get(selectorlist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorlist.dashboardGrid)
    cy.get(selectorlist.myInfoButton).click()
    cy.get(selectorlist.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorlist.lastNameField).clear().type('LastNameTest')
    cy.get(selectorlist.genericField).eq(3).clear().type('NameTest')
    cy.get(selectorlist.genericField).eq(4).clear().type('Aleatorio')
    cy.get(selectorlist.genericField).eq(5).clear().type('Generic')
    cy.get(selectorlist.genericField).eq(6).clear().type('2025-03-07')
    cy.get(selectorlist.genericField).eq(8).clear().type('007');
    cy.get(selectorlist.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    

  
    

  })
  it('Login - Failed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameField).type(userData.userFail.username)
    cy.get(selectorlist.passwordFIeld).type(userData.userFail.password)
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.wrongCredentialAlert)
  })
})