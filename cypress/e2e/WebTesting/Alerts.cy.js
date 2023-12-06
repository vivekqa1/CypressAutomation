describe("this is test for radibutton and checkbox", ()=> {

    it("Alert validation", ()=> {
     // 1) JavaScript Alert: It will have some text and an 'OK' button

     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
     cy.get("button[onclick='jsAlert()']").click();
     
     cy.on('window:alert',(t)=>{
         expect(t).contain('I am a JS Alert')
     })

     cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    it("Alert validation", ()=> {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
            expect(t).contain('I am a JS Confirm')
        })

        cy.get('#result').should('have.text','You clicked: Ok')

        cy.wait(1000)

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
            expect(t).contain('I am a JS Confirm')
        })

        cy.on('window:confirm',()=>false);

        cy.get('#result').should('have.text','You clicked: Cancel')
       
    })

    it("Alert prompt", ()=> {
        // 1) JavaScript Alert: It will have some text and an 'OK' button
   
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcom');
        })

        cy.get("button[onclick='jsPrompt()']").click();
        
        cy.on('window:prompt',()=>false);

        cy.get('#result').should('have.text','You entered: welcom')
   
       })

       it.only("Authenticated alert", ()=> {
        // 1) JavaScript Alert: It will have some text and an 'OK' button
   
        // cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: {username: "admin", password: "admin"}})

        // cy.get('div[class="example"] p').should('have.contain','Congratulations')

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get('div[class="example"] p').should('have.contain','Congratulations')
   
       })

}) 