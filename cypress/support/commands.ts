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
  cy.get('.fa.fa-cart-plus.fa-fw')
  .should('be.visible')
  .first()
  .click()
});


