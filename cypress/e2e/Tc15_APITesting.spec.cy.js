
describe('api testing', function(){

    it('get method', function(){
        cy.request('GET', 'https://reqres.in/api/users?page=2').then(Response=>{
            expect(Response.status).equal(200)
            expect(Response.body.data[0].first_name).equal('Michael')

        })
    })

    it('Post method', function(){
        var user ={
                "name": "morpheus",
                "job": "leader"
            
        }
        cy.request('POST', 'https://reqres.in/api/users',user).then(Response=>{
            expect(Response.status).equal(201)
            expect(Response.body.name).equal(user.name)
            expect(Response.body.job).equal(user.job)
        })
    })

   it('PUT method', function(){
        var user =
            {
                "name": "morpheus",
                "job": "QA"
            }
            
        
        cy.request('PUT', 'https://reqres.in/api/users/2',user).then(Response=>{
            expect(Response.status).equal(200)
            expect(Response.body.job).equal(user.name)
            expect(Response.body.name).equal(user.name)
        })
    })

    it('DELETE method', function(){
     
        
        cy.request('DELETE', 'https://reqres.in/api/users/2').then(Response=>{
            expect(Response.status).equal(204)
        })
    })

})