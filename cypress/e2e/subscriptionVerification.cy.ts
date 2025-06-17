const emailAdress = "abcdefg@test.com"

describe('test', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/')
  });

  it('dodanie kilku produktów do koszyka, zmiana quantity produktu, sprawdzenie czy nieprawidłowy kod rabatowy jest dodany, sprawdzenie czy cena jest zgodna', () => {
       
    cy.get('.footer-widget').scrollIntoView().should('be.visible');
    cy.get('.single-widget').should('be.visible').contains('Subscription');
    cy.get('#susbscribe_email').should('be.visible').click().clear().type(`${emailAdress}`);
    cy.get('#subscribe').should('be.visible').click();
    cy.get('.alert-success.alert').should('be.visible');

  });
});