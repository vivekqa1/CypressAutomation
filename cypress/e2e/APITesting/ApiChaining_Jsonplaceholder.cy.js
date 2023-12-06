describe("API Chaining", () => {

    it("Getting all the posts", () => {

        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0].id).to.eq(1)
            const postid = response.body[0].id;
            return postid;
        }).then((postid) => {
            cy.request({
                method: 'GET',
                url: `https://jsonplaceholder.typicode.com/comments?postID=${postid}`,
            })
            .then((response) =>{
                expect(response.status).to.eq(200);
                expect(response.body).to.have.length(500);

            })
        })
    })

    

}) 