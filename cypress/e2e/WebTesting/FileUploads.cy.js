import 'cypress-file-upload';

describe('File Uploads',(()=>{

it('Single file upload',()=>{

    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile('Cover letter.pdf');
    cy.get('#file-submit').click();
    cy.wait(2000);
    cy.get('#content > div > h3').should('have.text','File Uploaded!');
})

it('File Upload - Rename',()=>{

    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile({filePath: 'Cover letter.pdf', fileName:'test1.pdf'});
    cy.get('#file-submit').click();
    cy.wait(2000)
    cy.get('#content > div > h3').should('have.text','File Uploaded!');
})

it('File Upload - Drag and drop',()=>{

    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#drag-drop-upload').attachFile({filePath: 'Cover letter.pdf', fileName:'test1.pdf'}, {subjectType:'drag-n-drop'});
    cy.wait(2000);
    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('test1.pdf');
})


it('Multiple File Upload',()=>{

    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
    cy.get('#filesToUpload').attachFile(["Cover letter.pdf","example.json"]);
    cy.wait(5000);
    cy.get(':nth-child(6) > strong').should('have.text','Files You Selected:');
    cy.get('#fileList > :nth-child(1)').should('have.text','Cover letter.pdf');
    cy.get('#fileList > :nth-child(2)').should('have.text','example.json');
    
})

it('File Upload - Shadow Dom',()=>{

    cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
    cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile("Cover letter.pdf");
    cy.get('.smart-item-name', {includeShadowDom:true}).should('have.text','Cover letter.pdf');
})


}))