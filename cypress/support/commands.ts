Cypress.Commands.add('searchFor', (term: string): void => {
  cy.get('.btn-group.search-bar');
  cy.get('#filter_keyword')
    .should('be.visible')
    .clear()
    .type(term)
    .type('{enter}');
});


Cypress.Commands.add('addProductToCartByName', ({ name }: { name: string }): void => {
  cy.contains('.prdocutname', name, { timeout: 10000 })
    .should('be.visible')
    .parents('.thumbnail')
    .find('.productcart')
    .should('be.visible')
    .click();
});


