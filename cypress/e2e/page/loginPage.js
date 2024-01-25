class loginPage {

    getEmail(){return 'input[placeholder="Email"]'}
    getPassword(){return 'input[placeholder="Password"]'}
    getSignInButton(){return 'button[type="Submit"]'}

    enterEmail(email){
        cy.get(this.getEmail()).type(email)
    }
    enterPassword(password){
        cy.get(this.getPassword()).type(password)
    }
    clickSignInButton(){
        cy.get(this.getSignInButton()).click()
    }

}

export default loginPage