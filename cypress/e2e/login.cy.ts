describe('Login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should have user id input box with correct attributes', () => {
    cy.get(
      '#root > div > div.row > div > div > div.col-4.p-5 > form > div:nth-child(1) > input'
    )
      .should('exist')
      .should('have.attr', 'name', 'loginId');
  });

  it('should have password input box with correct attributes', () => {
    cy.get(
      '#root > div > div.row > div > div > div.col-4.p-5 > form > div:nth-child(2) > input'
    )
      .should('exist')
      .should('have.attr', 'name', 'password');
  });

  it('should have a sign in button with correct attributes', () => {
    cy.get('#root > div > div.row > div > div > div.col-4.p-5 > form > button')
      .should('exist')
      .should('have.text', 'Sign in');
  });

  it('should sign in and check if the user is logged in', () => {
    // Enter values in the user id and password inputs
    cy.get(
      '#root > div > div.row > div > div > div.col-4.p-5 > form > div:nth-child(1) > input'
    ).type(Cypress.env('REACT_APP_USER_ID'));
    cy.get(
      '#root > div > div.row > div > div > div.col-4.p-5 > form > div:nth-child(2) > input'
    ).type(Cypress.env('REACT_APP_USER_PASSWORD'));
    // Press the sign-in button
    cy.get(
      '#root > div > div.row > div > div > div.col-4.p-5 > form > button'
    ).click();

    cy.wait(1000);
    cy.get(
      '#root > div > div.row > div.col-2.p-0 > div > aside > div > div > div.css-1vmkajq > div > p'
    ).should('exist'); // Assuming the UCI Dashboard text appears after logging in
    // Add more assertions to verify the presence of logged-in elements or updated application state
  });
});
