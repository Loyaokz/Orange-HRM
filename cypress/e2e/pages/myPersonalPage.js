class myPersonalPage {
   
   
    selectorslist() {
        const selectors = {
            dashboardGrid: '.orangehrm-dashboard-grid',
            wrongCredentialAlert: "[role='alert']",  
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            submitButton: "[type='submit']",
            comboBoxFIeld: "[tabindex='0']",
        }
        return selectors
    
    }
         fillPersonalDetails(firstName, lastName, nickName) {
            cy.get(this.selectorslist().firstNameField).clear().type(firstName)
            cy.get(this.selectorslist().lastNameField).clear().type(lastName)
            cy.get(this.selectorslist().genericField).eq(3).clear().type(nickName)
         }

         fillEmployeeDetails(employeeId, driversLicense, dateOfBirth, testField) {
            cy.get(this.selectorslist().genericField).eq(4).clear().type(employeeId)
            cy.get(this.selectorslist().genericField).eq(5).clear().type(driversLicense)
            cy.get(this.selectorslist().genericField).eq(6).clear().type(dateOfBirth)
            cy.get(this.selectorslist().genericField).eq(8).clear().type(testField)

         }
         saveForm() {
            cy.get(this.selectorslist().submitButton).eq(0).click({force: true})
            cy.get('body').should('contain', 'Successfully Updated')
            cy.get('.oxd-toast-close')
         }
         fillStatus() {
            cy.get(this.selectorslist().comboBoxFIeld).eq(0).click({force: true})
            cy.get(':nth-child(5) > span').click()
            cy.get(this.selectorslist().comboBoxFIeld).eq(1).click()
            cy.get('.oxd-select-dropdown > :nth-child(3)').click({force: true})
            cy.get(this.selectorslist().comboBoxFIeld).eq(2).click()
            cy.get('.oxd-select-dropdown > :nth-child(5)').click({force: true})
         }


}
export default myPersonalPage
