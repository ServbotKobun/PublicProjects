/// <reference types="cypress" />

describe('Test Example', () => {
  const iframe = '#mce_0_ifr';

  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/iframe');
  });

  it('To Switxch to the framework', () => {
    cy.frameLoaded(iframe);
    cy.iframe()
      .clear()
      .type('This is a demo test')
      .should('have.text', 'This is a demo test');


  });



});