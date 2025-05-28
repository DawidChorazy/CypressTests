Cypress.Commands.add('searchFor', (term: string): void => {
  cy.get('input[name="search"]').clear().type(term + '{enter}');
});

Cypress.Commands.add('addProductToCartByName', ({ name }: { name: string }): void => {
  cy.contains('.fixed_wrapper .prdocutname', name)
    .parents('.thumbnail')
    .find('.productcart')
    .click();
});