describe('Login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should have user id input box with correct attributes', () => {
    cy.get('#root > div > div.row > div > div > div.col-4.p-5 > form > div:nth-child(1) > input')
      .should('exist')
      .should('have.attr', 'name', 'loginId');
  });

  it('should have password input box with correct attributes', () => {
    cy.get('#root > div > div.row > div > div > div.col-4.p-5 > form > div:nth-child(2) > input')
      .should('exist')
      .should('have.attr', 'name', 'password');
  });

  it('should have a sign in button with correct attributes', () => {
    cy.get('#root > div > div.row > div > div > div.col-4.p-5 > form > button')
      .should('exist')
      .should('have.text', 'Sign in');
  });
});
