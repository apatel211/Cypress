/// <reference types="cypress" />



describe('checkbox Functionality',function(){
    it('Different chckbox button test', function(){

        // checkbox button
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/')
        cy.get('#checkbox-v-2a').should('not.be.checked').check({force: true} ).should('be.checked')
        cy.get('#checkbox-v-2c').should('not.be.checked').check({force: true} ).should('be.checked')

        
    })
})
