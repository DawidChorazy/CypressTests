const data = {
    firstName: 'mojeimie',
    lastName: 'mojeNazwisko',
    address: 'mojadres',
    country: 'United States',
    state: 'mojstate',
    city: 'mojemiasto',
    zipcode: '22-222',
    mobileNum: '222222222'
}

const uniqueEmail = `testuser_${Date.now()}@example.com`;


describe('Dodanie produktu do koszyka z sekcji "karuzeli", przejście do koszyka, stworzenie konta, wpisanie unikalnych danych oraz usunięcie konta. ', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/')
  });

  it('test1', () => {

    cy.get('.recommended_items .carousel-inner .col-sm-4 .btn.btn-default.add-to-cart').eq(5).scrollIntoView().click();
    cy.get('.btn.btn-success.close-modal.btn-block').click();
    cy.get('#scrollUp').should('be.visible').click();
    cy.get('.shop-menu.pull-right').should('be.visible').find('.fa.fa-shopping-cart').click();
    cy.get('.col-sm-6').find('.btn.btn-default.check_out').should('be.visible').click();
    cy.get('#checkoutModal').find('a[href*="/login"').should('be.visible').click();
    cy.get('.col-sm-4').find('input[type="text"]').click().type('Costam');
    cy.get('.col-sm-4').find('input[type="email"]').eq(1).click().type(uniqueEmail);
    cy.get('.col-sm-4').find('button[type="submit"]').eq(1).should('be.visible').click();
    cy.get('.clearfix').find('input[type="radio"]').first().click().should('be.visible').click();
    cy.get('.required.form-group').find('input[type="password"]').should('be.visible').click().type('1234567890');
    cy.get('.col-xs-4').find('#days').should('be.visible').select('10');
    cy.get('.col-xs-4').find('#months').should('be.visible').select('April');
    cy.get('.col-xs-4').find('#years').should('be.visible').select('2005');
    cy.get('.required.form-group').find('#first_name').click().type(data.firstName);
    cy.get('.required.form-group').find('#last_name').click().type(data.lastName);
    cy.get('.required.form-group').find('#address1').click().type(data.address);
    cy.get('.required.form-group').find('#country').select(data.country);
    cy.get('.required.form-group').find('#state').click().type(data.state);
    cy.get('.required.form-group').find('#city').click().type(data.city);
    cy.get('.required.form-group').find('#zipcode').click().type(data.zipcode);
    cy.get('.required.form-group').find('#mobile_number').click().type(data.mobileNum);
    cy.get('.btn.btn-default').first().click();
    cy.get('.btn.btn-primary').first().click();
    cy.get('.col-sm-8').find('.fa.fa-trash-o').should('be.visible').click();
    cy.get('.btn.btn-primary').first().should('be.visible').click();
      
  });
});
