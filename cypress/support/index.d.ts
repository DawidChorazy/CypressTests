  declare namespace Cypress {
  interface Chainable {
    searchFor(term: string): Chainable<void>;
  }
}
  
  interface SearchOptions {
    term: string;
  }

  interface AddProductOptions {
    name: string;
  }