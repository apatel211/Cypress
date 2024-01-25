describe('web table', function(){

    const row =1
    const col =3
    it('check value present', function(){
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1').contains('td','http://www.jdoe.com').should('be.visible')
        cy.get(`#table1>tbody>tr:nth-child(${row})>td:nth-child(${col})`).contains('td','jsmith@gmail.com').should('be.visible')


        cy.get('#table1>tbody>tr>td:nth-child(2)').each(($ele, index, $list)=>{
            const fname = $ele.text()
            if(fname.includes('Frank')){
                cy.get('#table1>tbody>tr>td:nth-child(4)').eq(index).then(function($due){
                        const dueAmount = $due.text()
                        expect(dueAmount).to.equal('$51.00')
                })
            }
        })
    })
})