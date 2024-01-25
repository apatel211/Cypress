describe('hook conduit', function(){

   beforeEach(function(){
    cy.visit('https://react-redux.realworld.io/')
    cy.contains('Sign in').click()
    cy.get('input[placeholder="Email"]').type('ankita.it.2012@gmail.com')
    cy.get('input[placeholder="Password"]').type('@Test12345')
    cy.get('button[type="Submit"]').click()

   })

   it('create new post', function(){
    cy.contains(' New Post').click()
    cy.get('//input[@placeholder="Article Title"]').type('demo')
    cy.get('//input[@placeholder="What\'s this article about?"]').type('demo')
    cy.get('//textarea[@placeholder="Write your article (in markdown)"]').type('demo')
    cy.get('//input[@placeholder="Enter tags"]').type('demo')
    cy.get('//button[@type="button"]').click()
    cy.wait(10000)

   })

   it('verify feed', function(){
      cy.contains('Global Feed').click()
      cy.get('.article-preview:nth-child(1)').should('contain','demo')

   })

   afterEach(function(){
      cy.contains('Settings').click()
      //cy.contains('Or click here to logout.').click()
      cy.get('.btn.btn-outline-danger').click()
   })

})