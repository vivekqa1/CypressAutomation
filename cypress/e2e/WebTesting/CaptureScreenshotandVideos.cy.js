
describe('Capture Screenshot and vidoes', ()=>
{

it.only('Capture sceenshots & vides',function() 
{
    cy.visit('https://demo.opencart.com/');
    // cy.title().should('eq','Your Store');
    // cy.screenshot('homepage');
    // cy.wait(2000);
    // cy.get("img[title='Your Store']").screenshot('logo');

    //automatically caputer screenshot & videos on failures - only when you execute through CLI

    cy.title().should('eq','Your Stor');






})

})