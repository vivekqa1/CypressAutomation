// 1) GET the OAuth2 access token
//https:github.com/login/oauth/access_token
// Query  params -  client_id, client_secret, code

// To get the code: https://github.com/login/oauth/authorize?client_id=240d0ea6a9f952dbd720

//2) send GET request by using access token
//https://api.github.com/user/repos


describe("OAuth2", ()=> {

    let accessToken =  "";

    it("Get OAuth2 access token", ()=> {

        cy.request( { method: 'POST',
                      url: 'https:github.com/login/oauth/access_token',
                      qs:{client_id:'240d0ea6a9f952dbd720',client_secret:'90cb7ed1ee647404e2bc50cebf1dc87735f8ee63',code:'48a82c95505ff9d0bce7' }
                    })
        .then((resonse)=>{
            expect(resonse.status).to.eq(200);
            const params = resonse.body.split('&');
            accessToken = params[0].split('=')[1];
            cy.log(accessToken);
           
        })
    } )

    it("OAuth2 request", ()=> {

        cy.request( { method: 'GET',
                      url: 'https://api.github.com/user/repos',
                      headers:{Authorization:'Bearer '+accessToken}
                    })
        .then((resonse)=>{
            expect(resonse.status).to.eq(200);
            expect(resonse.body[0].id).to.equal(197143086);
            
        })
    } )
 
}) 