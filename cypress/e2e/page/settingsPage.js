class settingPage {

  
    getSignOutButton(){return '.btn.btn-outline-danger'}

    clickSignOutButton(){
        cy.get(this.getSignOutButton()).click()
    }

}

export default settingPage