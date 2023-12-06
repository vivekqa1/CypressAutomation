describe("API Testing Headers Params", ()=> {
 
    let authToken = null;

    before("Creating access token for api", ()=>{
        cy.request( { method: 'POST',
        url: 'https://simple-books-api.glitch.me/api-clients/',
        headers:{'Content-Type' : 'application/json'},
        body: {
                clientName: 'ABC',
                clientEmail: Math.random().toString(5).substring(2)+"@gmail.com"
            }
        }).then((responseToken)=>{
            authToken = responseToken.body.accessToken;
        })
    })

    before("Creating access token for api", ()=>{
        cy.request( { method: 'POST',
        url: 'https://simple-books-api.glitch.me/orders/',
        headers:{'Content-Type' : 'application/json',
                 'Authorization': 'Bearer ' + authToken },
        body: {
                bookId: 1,
                customerName: Math.random().toString(5).substring(2)
            }
        }).then((responseToken)=>{
           expect(responseToken.status).to.eq(201)
           expect(responseToken.body.created).to.eq(true)
        })
    })

    
    it("Passing Query parameters", ()=> {

        cy.request( { method: 'GET',
                      url: 'https://simple-books-api.glitch.me/orders',
                      headers:{'Content-Type' : 'application/json',
                            'Authorization': 'Bearer ' + authToken },
                      cookies:{'cookieName':'mycookie'}      
                    })
        .then((resonse)=>{
            expect(resonse.status).to.eq(200);
            expect(resonse.body).have.length(1);
        })
    } )
 
}) 