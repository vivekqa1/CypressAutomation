//click on link using label
// over writing existing contains() command
// re-usable custom command


describe('Custom commands', ()=> {
    
    it('handling links',()=>{

        cy.visit('https://demo.nopcommerce.com/');
        // cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click();
        // cy.get('h1').should('have.text','Apple MacBook Pro 13-inch');

        //cy.clickLink('Apple MacBook Pro 13-inch');
        cy.clickLink('HTC ONE M8 Android L 5.0 Lollipop');
        cy.get('h1').should('have.text','HTC One M8 Android L 5.0 Lollipop');
        
        //cy.get('h1').should('have.text','Apple MacBook Pro 13-inch');

    });

    it('overwriting existing command',()=>{

        cy.visit('https://demo.nopcommerce.com/');

        cy.clickLink('HTC ONE M8 Android L 5.0 Lollipop');
        cy.get('h1').should('have.text','HTC One M8 Android L 5.0 Lollipop');

    });

    it.only('Login command',()=>{
        cy.visit('https://demo.nopcommerce.com/');
        cy.Login("testing@gmail.com","test123")



    })

})