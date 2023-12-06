class Login
{

    // every element one seprate method

    setUserName(username){
        cy.get("input[placeholder='Username']").type(username);
    }

    setPassWord(password){
        cy.get("input[placeholder='Password']").type(password);
    }

    clickSubmit(){
        cy.get("button[type='submit']").click();
    }

    verifyLogin(){
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
    }
}

export default Login;
