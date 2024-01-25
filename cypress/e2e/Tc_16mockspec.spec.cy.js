/// <reference types="cypress" />

describe('hook conduit', function(){

    beforeEach(function(){
     cy.visit('https://react-redux.realworld.io/')
     cy.contains('Sign in').click()
     cy.get('input[placeholder="Email"]').type('ankita.it.2012@gmail.com')
     cy.get('input[placeholder="Password"]').type('@Test12345')
     cy.get('button[type="Submit"]').click()
 
    })
 
    
    it('Tag Mock',function(){
        cy.intercept('GET','/api/tags',{fixture:'tags.json'})
        cy.contains('Your Feed').should('be.visible')
        cy.get('.tag-list').should('contain','cypress').and('contain','udemy').and('contain','course')
    })
 
    it('Article Mock',function(){
        cy.intercept('GET','/api/articles/*',{fixture:'article.json'})
        cy.contains('Your Feed').should('be.visible')
        cy.contains('Global Feed').click()
        cy.get('.col-md-9').should('contain','demo')
    })

    it('Login User Mock',function(){
        cy.intercept('POST','/api/users/login',{fixture:'login.json'})
        cy.get('a[href^="#@"]').should('contain','ankita')
    })
  
})