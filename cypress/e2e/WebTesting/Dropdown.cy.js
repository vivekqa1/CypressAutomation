describe("this is test for radibutton and checkbox", ()=> {

    it.skip("dropdown test", ()=> {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Brazil').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text','Brazil')
       
    })

    it.skip("auto suggest dropdown test", ()=> {

        cy.visit("https://en.wikipedia.org/wiki/Main_Page")

        cy.get('[placeholder="Search Wikipedia"]').type('Brazil')

        cy.get('.cdx-search-result-title').contains('Brazilian Portuguese').click()      
       
    })

    it("dynamic suggest dropdown test", ()=> {

        cy.visit("https://www.google.com/")

        cy.get('[title="Search"]').type('Cypress Automation')
        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length', 12)

        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{

            if($el.text()=='cypress automation resume'){

                cy.wrap($el).click()
            }

        })

        cy.get('[title="Search"]').should('have.value', 'cypress automation resume')

       
    })

}) 