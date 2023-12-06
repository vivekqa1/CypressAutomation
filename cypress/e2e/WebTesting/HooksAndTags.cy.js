//before
//after
//beforeEach
//afterEach

describe('MyTestSuite', ()=> {
    
    before(()=>{

        cy.log("*****  Launch app ******")
    })

    after(()=>{

        cy.log("*****  closing app ******")
    })

    beforeEach(()=>{

        cy.log("*****  Login to app ******")

    })

    afterEach(()=>{

        cy.log("*****  logout from app ******")

    })

    it('Search',()=>{
    
        cy.log("****** searching *******")

    });


    it('Advance Search',()=>{

        cy.log("****** Advance Search *******")

    });

    it('Listing Products',()=>{
      
        cy.log("****** Listing Products *******")
     
    });

})