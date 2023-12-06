
describe("CSS locator", () => {
  
it("verify title - positive test", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.get('.oxd-input[name="username"]').type("admin")
    cy.get('input.oxd-input[name="password"]').type("admin123")
    cy.get('.oxd-button').click()
    cy.get('h6.oxd-text').contains("Dashboard")
    cy.title().should('eq','OrangeHRM')
    cy.xpath('//li[@class="oxd-userdropdown"]').click();
    cy.xpath('//a[text()="Logout"]').click();
  });


});