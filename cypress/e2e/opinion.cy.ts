const obj = {
 imgsrc: '//automationteststore.com/image/thumbnails/18/78/new_ladies_red3_jpg-100225-250x250.jpg'
}

describe('Znalezienie produktu, dodanie opinii', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
  });

  it('Znalezienie produktu, dodanie opinii', () => {
      cy.get('#categorymenu a').filter(':contains("Apparel")').click();
    cy.get('#list').should('be.visible').click();
    cy.get('.col-md-4').eq(2).should('be.visible').click();
    cy.get('a[href="#review"]').click();
    cy.get('#rating3').should('be.visible').click();
    cy.get('#name').should('be.visible').click().type('Ktos');
    cy.get('#text').should('be.visible').click().type('Taki sredni produkt 2/10');



      
  });
});
