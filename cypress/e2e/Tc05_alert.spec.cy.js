describe('alerts',function(){

    it('simple alert', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('I am a JS Alert')
        })
        cy.get('#result').contains('You successfully clicked an alert')
      
    })

    it('confirmation alert ok button ', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('I am a JS Confirm')
        })
        cy.get('#result').contains('You clicked: Ok')
    })


    it('confirmation alert cancel button ', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('I am a JS Confirm')
            return false
        })
        cy.get('#result').contains('You clicked: Cancel')
    })


    it('promt alert ', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
       
        cy.window().then(function($win){
            cy.stub($win,'prompt').returns('hello alert')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').contains('You entered: hello alert')
    })
})