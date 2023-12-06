//go()

describe('My suite', ()=>
{

it.only('Navigation Test',function() 
{
    cy.visit('https://demo.opencart.com/');
    cy.title().should('eq','Your Store');

    cy.get(':nth-child(7) > .nav-link').click();
    cy.get('h2').should('have.text','Cameras');

    cy.go("back");
    cy.title().should('eq','Your Store');

    cy.go("forward");
    cy.get('h2').should('have.text','Cameras');
    
    cy.go(-1);
    cy.title().should('eq','Your Store');

    cy.go(1);
    cy.get('h2').should('have.text','Cameras');

    cy.reload();
    cy.get('h2').should('have.text','Cameras');
})

})