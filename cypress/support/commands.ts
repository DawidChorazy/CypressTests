Cypress.Commands.add('searchFor', (term: string): void => {
  cy.get('.btn-group.search-bar', { timeout: 10000 })
  cy.get('#filter_keyword')
    .should('be.visible')
    .clear()
    .type(term)
    .type('{enter}');
});


Cypress.Commands.add('addProductToCartByName', ({ name }: { name: string }): void => {
  cy.contains('.fixed_wrapper .prdocutname', name)
    .parents('.thumbnail')
    .find('.productcart')
    .click();
});