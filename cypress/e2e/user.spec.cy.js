import userData from '../fixtures/user-data.json'
import LoginPage from '../e2e/pages/loginPages.js'
import DashboardPage from '../e2e/pages/dashBoardpages.js'
import MenuPage from '../e2e/pages/menuPage.js'
import myPersonalPage from './pages/myPersonalPage.js'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new myPersonalPage()
describe('Orange HRM Tests', () => {

const selectorlist = {



}
  

  it('User info update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username,userData.userSuccess.password )

    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()
    
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails('EmployId', 'Drivers License', '2025-03-03', 'Deu certo',)
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })
  
})