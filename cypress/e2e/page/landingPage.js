class landingPage {

    getSingin(){return 'Sign in'}

    clickSigninButton(){
        cy.contains(this.getSingin()).click()
    }

}

export default landingPage