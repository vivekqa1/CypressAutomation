describe("HTTP Requests", ()=> {

    it("POST Call -  Approach 1 Hard coded json object", ()=> {

        const requestBody = {
            tourist_name: "Mike",
            tourist_email:"Mike@gmail.com",
            tourist_location: "Paris"
        }
    
        cy.request( { method: 'POST',
                      url: 'http://restapi.adequateshop.com/api/Tourist',
                      body: requestBody
            })
        .then((resonse)=>{
            expect(resonse.status).to.eq(201);
            expect(resonse.body.tourist_name).to.eq("Mike");
            expect(resonse.body.tourist_email).to.eq("Mike@gmail.com");
            expect(resonse.body.tourist_location).to.eq("Paris");
    
        })
    } )

    it("POST Call -  Approach 2 dynamically generating json object", ()=> {

        const requestBody = {
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2)+"@gmail.com",
            tourist_location: "Paris"
        }
    
        cy.request( { method: 'POST',
                      url: 'http://restapi.adequateshop.com/api/Tourist',
                      body: requestBody
            })
        .then((resonse)=>{
            cy.log(resonse.body.tourist_name)
            cy.log(resonse.body.tourist_email)
            expect(resonse.status).to.eq(201);
            expect(resonse.body.tourist_name).to.eq(requestBody.tourist_name);
            expect(resonse.body.tourist_email).to.eq(requestBody.tourist_email);
            expect(resonse.body.tourist_location).to.eq("Paris");
    
        })
    } )

    it.only("POST Call -  Approach 3 get data from fixture file", ()=> {

        cy.fixture('tourist').then((tdata)=>{
            
            const requestBody = tdata

            cy.request( { method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
         })
            .then((resonse)=>{
            cy.log(resonse.body.tourist_name)
            cy.log(resonse.body.tourist_email)
            expect(resonse.status).to.eq(201);
            expect(resonse.body.tourist_name).to.eq(requestBody.tourist_name);
            expect(resonse.body.tourist_email).to.eq(requestBody.tourist_email);
            expect(resonse.body.tourist_location).to.eq("Paris");

            expect(resonse.body).has.property('tourist_email',requestBody.tourist_email)
            expect(resonse.body).to.have.property('tourist_name',requestBody.tourist_name)
        })

    })
    
        
    } )


}) 