import 'cypress-iframe'

describe("this is test for radibutton and checkbox", ()=> {

    it("Frist approch to handle frame", ()=>{
    
    cy.visit("https://the-internet.herokuapp.com/iframe")

      const iframe = cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap)

      iframe.clear().type("Welcome {cmd+a}")

    cy.get("[aria-label='Bold']").click();

    })

    it("Second approch to handle frame bye using custom command", ()=>{
    
        cy.visit("https://the-internet.herokuapp.com/iframe")
    
    
        cy.getIframe('#mce_0_ifr').clear().type("Welcome {cmd+a}")
    
        cy.get("[aria-label='Bold']").click();
    
        })

    it("approach -3  cypress ifram plugin", ()=>{
    
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded('#mce_0_ifr') // load the frame
        
        cy.iframe('#mce_0_ifr').clear().type("Welcome {cmd+a}")
        
        cy.get("[aria-label='Bold']").click();
        
    })


})