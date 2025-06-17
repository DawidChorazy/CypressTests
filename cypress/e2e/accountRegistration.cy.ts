describe('tset', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
  });

  const registrationValues = {
    firstName: 'jan',
    lastName: "kowalski",
    email: "jankowalski@napewno.pl",
    tel: '123123123',
    fax: '123123123',
    company: 'jankowalski',
    adress1: 'Ktosiowice',
    city: 'Ktosioców Górny',
    Region: 'Lodzkie',
    ZIP: '22-211',
    country: 'Poland',
    loginName: 'jankowalski123',
    password: 'ktoscos',
    passwordConfirm: 'ktoscos'


  }

  //  Wejście w formularz rejestracyjny,
  //  wypełnienie danych,
  //  stworzenie konta

  it('test', () => {
    cy.get('#customer_menu_top').should('be.visible').click();
    cy.get('.btn.btn-orange.pull-right').first().should('be.visible').click();
    cy.get('#AccountFrm_firstname').should('be.visible').type(registrationValues.firstName);
    cy.get('#AccountFrm_lastname').should('be.visible').type(registrationValues.lastName);
    cy.get('#AccountFrm_email').should('be.visible').type(registrationValues.email);
    cy.get('#AccountFrm_telephone').should('be.visible').type(registrationValues.tel);
    cy.get('#AccountFrm_fax').should('be.visible').type(registrationValues.fax);
    cy.get('#AccountFrm_company').should('be.visible').type(registrationValues.company);
    cy.get('#AccountFrm_address_1').should('be.visible').type(registrationValues.adress1);
    cy.get('#AccountFrm_city').should('be.visible').type(registrationValues.city);
    cy.get('#AccountFrm_postcode').should('be.visible').type(registrationValues.ZIP);
    cy.get('#AccountFrm_country_id').should('be.visible').select(registrationValues.country);
    cy.get('#AccountFrm_zone_id').should('be.visible').select(registrationValues.Region);
    cy.get('#AccountFrm_loginname').should('be.visible').type(registrationValues.loginName);
    cy.get('#AccountFrm_password').should('be.visible').type(registrationValues.password);
    cy.get('#AccountFrm_confirm').should('be.visible').type(registrationValues.passwordConfirm);
    cy.get('#AccountFrm_newsletter0').should('be.visible').click();
    cy.get('#AccountFrm_agree').should('be.visible').click();
    cy.get('.btn.btn-orange.pull-right.lock-on-click').should('be.visible').click();
  });
});