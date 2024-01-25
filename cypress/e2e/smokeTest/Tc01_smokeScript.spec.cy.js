/// <reference types="cypress" />

Cypress.config('baseUrl','https://react-redux.realworld.io/')

describe('Login Functionality',function(){
    it('login test', function(){
        cy.visit('/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder="Email"]').type('ankita.it.2012@gmail.com')
        cy.get('input[placeholder="Password"]').type('@Test12345')
        cy.get('button[type="Submit"]').click()
        cy.wait(10000);
        cy.get('a[href="#settings"]').click()
        cy.get('.btn.btn-outline-danger').click()
    })
})
