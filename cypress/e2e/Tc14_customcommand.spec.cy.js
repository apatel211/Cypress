describe('Login Functionality',function(){

    const email ='ankita.it.2012@gmail.com'
    const Password ='@Test12345'
    const Password1 ='@Test1234'

   beforeEach(function(){
    cy.fixture('conduit').as('data')

   })

   it('login test', function(){
        cy.conduaitLogin(this.data.email, this.data.Password)
        cy.contains('Settings').click()
        cy.contains('Or click here to logout.').click()
    })

    it('login test failed', function(){
        cy.conduaitLogin(this.data.email, this.data.Password1)
        cy.get('.error-messages').should('contain','email or password is invalid')
    })
})