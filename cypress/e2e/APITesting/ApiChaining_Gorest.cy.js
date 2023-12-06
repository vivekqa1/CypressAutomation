/*
POST: https://gorest.co.in/public/v2/users
PUT:  https://gorest.co.in/public/v2/users/${userId}
DELETE: https://gorest.co.in/public/v2/users/${userId}
*/

describe("Gorest API Chaining", () => {

    const auth_token = 'Bearer a458df0e50cc2f8d2deb381cd65559fc36fc74ac2e1edc9be2fd488c63a1f269';

    it("Create, update, delete user in Gorest API", () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: {
                name: 'testcypress',
                email: Math.random().toString(5).substring(2) + '@gmail.com',
                gender: 'male',
                status: 'active'
            },
            headers: { Authorization: auth_token }
        }).then((response) => {
            expect(response.status).to.eq(201);
            const userid = response.body.id;
            // updating user request
            cy.request({
                method: 'PUT',
                url: `https://gorest.co.in/public/v2/users/${userid}`,
                body: {
                    name: 'Scott'
                },
                headers: { Authorization: auth_token }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.name).to.equal('Scott')
                //delete resource
                cy.request({
                    method: 'DELETE',
                    url: `https://gorest.co.in/public/v2/users/${userid}`,
                    headers: { Authorization: auth_token }
                }).then((response) => {
                    expect(response.status).to.eq(204);
                })

            })

        })
    })

}) 