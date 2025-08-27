import userData from '../fixtures/user-data.json'
import LoginPage from '../e2e/pages/loginPages.js'
import DashboardPage from '../e2e/pages/dashBoardpages.js'
import MenuPage from '../e2e/pages/menuPage.js'


const loginPage = new LoginPage()

const dashboardPage = new DashboardPage()

const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

const selectorlist = {

  
  dashboardGrid: '.orangehrm-dashboard-grid',
  wrongCredentialAlert: "[role='alert']",
  
  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-dd-mm']",
  submitButton: "[type='submit']",
  comboBoxFIeld: "[tabindex='0']",

}
  

  it.only('User info update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password )

    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    
    
    cy.get(selectorlist.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorlist.lastNameField).clear().type('LastNameTest')
    cy.get(selectorlist.genericField).eq(3).clear().type('NameTest')
    cy.get(selectorlist.genericField).eq(4).clear().type('Aleatorio')
    cy.get(selectorlist.genericField).eq(5).clear().type('Generic')
    cy.get(selectorlist.genericField).eq(6).clear().type('2025-03-07')
    cy.get(selectorlist.genericField).eq(8).clear().type('007')
    cy.get(selectorlist.submitButton).eq(0).click({force: true})
    
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  
    
    
    cy.get(selectorlist.comboBoxFIeld).eq(0).click({force: true})
    cy.get(':nth-child(5) > span').click()
    cy.get(selectorlist.comboBoxFIeld).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click({force: true})
    cy.get(selectorlist.comboBoxFIeld).eq(2).click()
    cy.get('.oxd-select-dropdown > :nth-child(5)').click({force: true})


    
  })
  it('Login - Failed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameField).type(userData.userFail.username)
    cy.get(selectorlist.passwordFIeld).type(userData.userFail.password)
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.wrongCredentialAlert)
  })
})