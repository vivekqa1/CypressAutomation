describe("this is test for radibutton and checkbox", ()=> {

    it("checkbox assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.get('.oxd-input[name="username"]').type("admin")
        cy.get('input.oxd-input[name="password"]').type("admin123")
        cy.get('.oxd-button').click()
        cy.get("[href='/web/index.php/pim/viewMyDetails']").click()

        cy.xpath("(//input[@type='radio']/following-sibling::span)[2]").click()
        cy.xpath("(//input[@type='radio'])[2]").should('be.checked')

    })


})