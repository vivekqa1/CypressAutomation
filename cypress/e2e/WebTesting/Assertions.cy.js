describe("Assertions Demo", ()=>{

    it("Explicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        //should
        //and
        cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrmlive.com')

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive.com')
        .and('not.contain','greenhrm')

        cy.title().should('include','Orange').and('contains','HRM').and('eq','OrangeHRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')

        cy.xpath('//a').should('have.length','5')

        cy.get('.oxd-input[name="username"]').type("admin").should('have.value','admin')

    })

    it("Implicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        

        cy.get('.oxd-input[name="username"]').type("admin")
        cy.get('input.oxd-input[name="password"]').type("admin123")
        cy.get('.oxd-button').click()

        let expName = "xyz";

        cy.get('.oxd-userdropdown-name').then((x)=> {
            let actName = x.text()

            //BDD
            expect(actName).to.not.equals(expName)
            expect(actName).to.equals(expName)

            //TDD
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)
            
        })



    })


})