describe('xpth', function(){
    it('xptah',function(){
        cy.visit('https://react-redux.realworld.io/#/register?_k=a8cmn9')
        cy.xpath('//a[normalize-space()="Sign in"]').click()
        cy.xpath('//input[@placeholder="Email"]').type('ankita.it.2012@gmail.com')
        cy.xpath('//input[@placeholder="Password"]').type('@Test12345')
        cy.xpath('//button[@type="submit"]').click()
        cy.get('a[href="#settings"]').click()
        cy.get('.btn.btn-outline-danger').click()
    })
})