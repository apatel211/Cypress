/// <reference types="cypress" />



describe('dropdown Functionality',function(){
    it('static dropdown test', function(){

        // dropdown button
        cy.visit('https://seleniumbase.io/demo_page')
        cy.get('#mySelect').select('Set to 50%').should('have.value','50%')
        
    })

    it('dynamic dropdown test', function(){

        // dropdown button
        cy.visit('https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx')
        cy.get('#ctl00_ContentPlaceholder1_RadDropDownProducts').click()
        cy.get('.rddlItem').contains('Ikura').click()

    })

    

    it('multiple dropdown test', function(){

        // dropdown button
        cy.visit('https://demo.mobiscroll.com/select/multiple-select')
        cy.get('#multiple-select-input').click({force: true})
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Movies, Music & Games').click()
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Electronics & Computers').click()


       

    })
})
