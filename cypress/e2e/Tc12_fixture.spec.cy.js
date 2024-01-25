describe('Login Functionality',function(){

    // const email ='ankita.it.2012@gmail.com'
    // const Password ='@Test12345'
    // const Password1 ='@Test1234'

   beforeEach(function(){
    cy.fixture('conduit').as('data')

   })

   it('login test', function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder="Email"]').type(this.data.email)
        cy.get('input[placeholder="Password"]').type(this.data.password)
        cy.get('button[type="Submit"]').click()
        cy.contains('Settings').click()
        cy.contains('Or click here to logout.').click()
    })

    xit('login test failed', function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder="Email"]').type(this.data.email)
        cy.get('input[placeholder="Password"]').type(this.data.password1)
        cy.get('button[type="Submit"]').click()
        cy.get('.error-messages').should('contain','email or password is invalid')
    })
})