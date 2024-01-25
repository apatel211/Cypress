describe('hooks basic', function(){

    before(function(){
        cy.log('Before block ')
    })

    beforeEach(function(){
        cy.log('beforeEach ')
    })

    it('search item ', function(){
        cy.log('search item ')
    })

    it('order item ', function(){
        cy.log('order item ')
    })

    it('checkout item ', function(){
        cy.log('checkout item h ')
    })

    after(function(){
        cy.log('after block ')
    })

    this.afterEach(function(){
        cy.log('aftereach block ')
    })
})