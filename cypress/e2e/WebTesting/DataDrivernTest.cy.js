describe('MyTestSuite', ()=> {
    
    it.only('DataDrivernTest',()=>{

        cy.fixture('orangehrm2').then((data)=>{

            cy.visit('https://opensource-demo.orangehrmlive.com/')

             data.forEach((userdata) => {
                
                    cy.get("input[placeholder='Username']").type(userdata.username);
                    cy.get("input[placeholder='Password']").type(userdata.password);
                    cy.get("button[type='submit']").click();

                    if(userdata.username=="Admin" && userdata.password=="admin123"){
                        cy.get(':nth-child(2) > .oxd-main-menu-item').should('have.text',userdata.expected)
                        
                        cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                        cy.wait(2000);
                    }
                    else{
                        cy.wait(2000);
                        cy.get('.oxd-alert-content > .oxd-text').should('have.text',userdata.expected)
                    }
                    
                });
                
            })

    });

})