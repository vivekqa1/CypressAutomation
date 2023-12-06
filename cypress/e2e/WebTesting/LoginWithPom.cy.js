import Login from "../../PageObjects/LoginPage";
import Login2 from "../../PageObjects/LoginPage2";

describe('POM', ()=> {

    // General approach
    it('LoginTest',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

    });

// using pom - approach 1
    it('LoginTest with page object',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        const ln = new Login();

        ln.setUserName('Admin');
        ln.setPassWord('admin123');
        ln.clickSubmit();
        ln.verifyLogin();
    });

    // using pom - approach 2
    it('LoginTest with page object',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        const ln = new Login2();

        ln.setUserName('Admin');
        ln.setPassWord('admin123');
        ln.clickSubmit();
        ln.verifyLogin();
    });

    // using pom - approach 3 with fixture
    it.only('LoginTest with page object',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        const ln = new Login2();

        cy.fixture('orangehrm').then((data) =>{

            ln.setUserName(data.username);
            ln.setPassWord(data.password);
            ln.clickSubmit();
            ln.verifyLogin();

        })


    });



})