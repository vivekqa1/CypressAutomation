describe("API Testing Query Params", ()=> {
 
    const queryParam = { page: 2};
    
    it("Passing Query parameters", ()=> {

        cy.request( { method: 'GET',
                      url: 'https://reqres.in/api/users',
                      qs: queryParam
            })
        .then((resonse)=>{
            cy.log(resonse.body.page);
            expect(resonse.status).to.eq(200);
            expect(resonse.body.page).to.eq(2);
            expect(resonse.body.data).has.length(6);
            expect(resonse.body.data[0]).have.property('id',7)
            expect(resonse.body.data[0]).has.property('first_name','Michael')
        })
    } )
 
}) 