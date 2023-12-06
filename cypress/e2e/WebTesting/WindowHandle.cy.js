describe("this is test for radibutton and checkbox", ()=> {

    it("Frist approch to handle window", ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")

      cy.get('.example >a').invoke('removeAttr','target').click()

      cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

      cy.wait(5000)

      cy.go('back')
      cy.get('h3').should('have.text','Opening a new window')

    })


    it.only("Second approch to handle window", ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")

      cy.get('.example >a').then((e)=>{
            let url = e.prop('href')
            cy.visit(url)

      })

      cy.wait(2000)
     
      cy.go('back')
      cy.get('h3').should('have.text','Opening a new window')
   

      


    })


})