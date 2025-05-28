describe('test', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
  });

  it('dodanie kilku produktów do koszyka, zmiana quantity produktu, sprawdzenie czy nieprawidłowy kod rabatowy jest dodany, sprawdzenie czy cena jest zgodna', () => {
        cy.get('#popularbrands').scrollIntoView().should('be.visible');
        cy.get('#brandcarousal img').eq(5).should('be.visible').click();
        cy.get('.productcart').first().scrollIntoView().should('be.visible').click();
        cy.get('.productcart').eq(1).scrollIntoView().should('be.visible').click();
        cy.get('.mt20 .cart').should('be.visible').click();
        cy.get('.container-fluid.cart-info.product-list').find('input[type="text"]').eq(1).click().clear().type('5');
        cy.get('.registerbox').should('be.visible').find('#coupon_coupon').click().type('XxXxXxX');
        cy.get('#apply_coupon_btn').should('be.visible').click();
        cy.get('.alert.alert-error.alert-danger').should('be.visible');
        cy.get('.col-md-6.cart-info.totals.pull-right.table-responsive').scrollIntoView().should('be.visible').should('contain', '$198.00');
        
  });
});