import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe("Mouse Operations", ()=> {

    it('MouseHover',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('not.be.visible');
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('be.visible');

    });


    it('Right click',()=>{

        //Appraoch1

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
        // cy.get('.context-menu-one').trigger('contextmenu');
        // cy.get('.context-menu-list').should('be.visible');

        //Appraoch2
        cy.get('.context-menu-one').rightclick();
        cy.get('.context-menu-list').should('be.visible');


       

    });

    it('Double click',()=>{

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.frameLoaded('#iframeResult');

        //Approach 1 - using trigger() method

        // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
        // cy.iframe('#iframeResult').find("#field2").should('have.value', 'Hello World!');


        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find("#field2").should('have.value', 'Hello World!');

    });


    it('Drag and Drop using plugin',()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get('#box6').should('be.visible');
        cy.get('#box106').should('be.visible');

        cy.wait(3000);
        cy.get('#box6').drag('#box106',{force:true});

    });

    it.only('Scrolling Page',()=>{

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        //india flag
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible');

        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should('be.visible');

        //cy.get('.read-next > ul > :nth-child(1) > a').scrollIntoView({duration:2000});
        cy.get('#footer').scrollIntoView({duration:2000});

    });


})