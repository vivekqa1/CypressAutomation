
describe("My first suite", () => {
  
    it("verify title - positive test", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM')
  });

  it("verify title - nagative test", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM123')
  });

});
