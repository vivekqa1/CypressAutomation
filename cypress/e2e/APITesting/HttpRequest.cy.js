describe("HTTP Requests", ()=> {

    it("GET Call", ()=> {
    
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status').should('equal', 200);
    })

    it("POST Call", ()=> {
    
        cy.request( { method: 'POST',
                      url: 'https://jsonplaceholder.typicode.com/posts/',
                      body: {
                                title:"Test post",
                                body:"This is post call",
                                userId:1
                            }
            })
        .its('status').should('equal', 201);
    } )


    it("PUT Call", ()=> {
    
        cy.request( { method: 'PUT',
                      url: 'https://jsonplaceholder.typicode.com/posts/1',
                      body: {
                                title:"Test post - update",
                                body:"This is put call",
                                userId:1,
                                id: 1
                            }
            })
        .its('status').should('equal', 200);
    } )

    it("DELETE Call", ()=> {
    
        cy.request( { method: 'DELETE',
                      url: 'https://jsonplaceholder.typicode.com/posts/1'
            })
        .its('status').should('equal', 200);
    } )

}) 