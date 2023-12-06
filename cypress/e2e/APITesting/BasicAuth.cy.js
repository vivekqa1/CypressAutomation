describe("Authentication", ()=> {
 
    it("Basic Authentication", ()=> {

        cy.request( { method: 'GET',
                      url: 'https://postman-echo.com/basic-auth',
                      auth:{
                            user: 'postman',
                            pass: 'password'
                      }   
                    })
        .then((resonse)=>{
            expect(resonse.status).to.eq(200);
            expect(resonse.body.authenticated).to.eq(true)
        })
    } )

    it("Digest Authentication", ()=> {

        cy.request( { method: 'GET',
                      url: 'https://postman-echo.com/basic-auth',
                      auth:{
                            username: 'postman',
                            password: 'password',
                            method:'degest'
                      }   
                    })
        .then((resonse)=>{
            expect(resonse.status).to.eq(200);
            expect(resonse.body.authenticated).to.eq(true)
        })
    } )

    it("Bearer Token Authentication", ()=> {

        const token = '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';

        cy.request( { method: 'GET',
                      url: 'https://api.github.com/user/repos',
                      headers:{ Authorization: 'Bearer ' + token
                      }   
                    })
        .then((resonse)=>{
            expect(resonse.status).to.eq(200);
            cy.log(resonse.body);
        })
    } )

    it("API Key Authentication", ()=> {

        cy.request( { method: 'GET',
                      url: 'api.openweathermap.org/data/2.5/forecast/daily?q=Delhi',
                      qs:{appid:'fe9c5cddb7e01d747b4611c3fc9eaf2c'}
                    })
        .then((resonse)=>{
            expect(resonse.status).to.eq(200);
            cy.log(resonse.body);
        })
    } )
 
}) 