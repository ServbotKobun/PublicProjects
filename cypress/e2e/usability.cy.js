/// <reference types="cypress" />

describe('Test Example for Usability Testing', () => {

    it('Page Analysis',() =>{
      cy.visit('https://www.mycnote.com');
      cy.injectAxe();
      cy.checkA11y();
    })

});