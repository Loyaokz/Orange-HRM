import userData from '../fixtures/user-data.json'
import LoginPage from '../e2e/pages/loginPages.js'
import DashboardPage from '../e2e/pages/dashBoardpages.js'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage() 


describe('Login OrangeHRM Tests', () => {
  
  it.only('Login - Failed', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
  it.only('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })
})