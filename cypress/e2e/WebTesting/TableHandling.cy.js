describe("Handle Tables", () => {

  beforeEach('Login',()=>{

    cy.visit("https://demo.opencart.com/admin/index.php");

    cy.get('#input-username').type('demo');
    cy.get('#input-password').type('demo');
    cy.get('[type="submit"]').click();
    cy.get('.btn-close').click();
    cy.get('#menu-customer>a').click();
    cy.get('#menu-customer>ul>li:first-child>a').click();

  }) 

  it("Check Number Rows & Column", () => {

    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
    cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')

  });

  it("Check cell data from specific row & column", () => {

   cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains("hfgjhgjgjggj@gmail.com");

  });

  it("Read all the rows & columns data in the first page", () => {

    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
      .each(($row, index, $rows)=>{

          cy.wrap($row).within(()=>{

              cy.get("td").each( ($col, index, $cols)=>{

                cy.log($col.text())

              })
          } )

    })

  });

  it.only('Pagination',()=>{
   
    //find total number of pages
    // cy.get(".col-sm-6.text-end").then( (e) =>{

    //   let mytext = e.text(); //Showing 1 to 10 of 16401 (1641 Pages)
    //   let totalpages =  mytext.substring( mytext.indexOf("(")+1, mytext.indexOf("Pages")-1 );
    //   cy.log("Total number of pages in a table =====>"+totalpages);
    // })

    let totalpagesforex = 5;

    for(let p =1; p<=totalpagesforex; p++)
    {
        if(totalpagesforex>1){

          cy.log("Active page is ===="+p)
          cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
          cy.wait(2000);

          cy.get("table[class='table table-bordered table-hover']>tbody>tr")
              .each(($row, index, $rows)=>{

                  cy.wrap($row).within(()=>{

                      cy.get("td:nth-child(3)").then ( (e)=>{
                        cy.log(e.text());
                      })

                      })
                  } )

        }

    }



  })


});
