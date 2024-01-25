/// <reference types="cypress" />



describe('Radio button Functionality',function(){
    it('Different radio button test', function(){

        // basic radio button
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/')
        cy.get('#radio-choice-0a').should('not.be.checked').click({force: true} )
        cy.get('#radio-choice-0b').should('not.be.checked').click({force: true} )

        // modern radio button 
        cy.get('#radio-choice-h-2b').should('not.be.checked').click({force: true} )
        cy.get('#radio-choice-h-2c').should('not.be.checked').click({force: true} )
    })
})
