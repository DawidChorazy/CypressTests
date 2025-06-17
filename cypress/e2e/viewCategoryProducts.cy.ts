

describe('test', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/')
  });

  //  przejście do sidebara strony,
  //  sprawdzenie czy lista women jest widoczna i rozwijalna,
  //  kliknięcie w tops,
  //  sprawdzenie czy nazwa tytułu zgadza się z klikniętą opcją(Women - Tops Products),
  //  sprawdzenie czy lista men jest widoczna i rozwijalna,
  //  kliknięcie w jeans,
  //  sprawdzenie czy nazwa tytułu zgadza się z klikniętą opcją(Men - Jeans Products)
  
  it('test', () => {
       
    cy.get('.left-sidebar').should('be.visible').scrollIntoView().contains('Women');
    cy.get('.fa.fa-plus').first().click();
    cy.get('.panel-body').contains('Tops').click();
    cy.get('.title.text-center').should('be.visible').contains('Women - Tops Products');
    cy.get('.left-sidebar').should('be.visible').contains('Men');
    cy.get('.fa.fa-plus').eq(1).click();
    cy.get('.panel-body').contains('Jeans').click();
    cy.get('.title.text-center').should('be.visible').contains('Men - Jeans Products');

  });
});