describe('Wyszukiwanie produktu', () => {
  it('Wyszukuje "shampoo"', () => {
    cy.visit('https://automationteststore.com/');
    cy.searchFor('shampoo');

    cy.get('.fixed_wrapper .prdocutname')
      .should('exist')
      .and('contain.text', 'Shampoo');

    cy.addProductToCartByName({ name: 'Curls to straight Shampoo' });
  });
});
