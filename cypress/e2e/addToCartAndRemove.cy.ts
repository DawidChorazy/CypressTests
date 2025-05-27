const productObj = {
  name: "Benefit Bella Bamba",
  quantity: 10,
  price: 28.00,
};

describe('Wyszukiwanie, sprawdzenie ceny, dodanie produktu do koszyka następnie jego usunięcie i powrót do menu', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
  });

  it('Wyszukiwanie, sprawdzenie ceny, dodanie produktu do koszyka następnie jego usunięcie i powrót do menu', () => {
      cy.get('#filter_keyword').should('be.visible').type(`${productObj.name}{enter}`);

      cy.get('.bgnone').should('be.visible').and('contain.text', productObj.name)
       cy.get('.productfilneprice').should('be.visible').and('contain.text', productObj.price)
      cy.get('#product_quantity').should('be.visible').clear().type(productObj.quantity.toString());
     
      cy.get('.cart').click();
      cy.get('i.fa-trash-o').first().should('be.visible').click();
      cy.get('.btn.btn-default.mr10').should('be.visible').click();
      
  });
});
