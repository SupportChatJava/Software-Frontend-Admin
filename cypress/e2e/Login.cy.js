describe('Login', () => {
  it('Navigate to login page', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Login').click();
  })

  it('Login to existing account', () => {
    cy.visit('http://localhost:3000/Login')

    cy.get('#emailInput')
        .type('Kayle@email.com');

    cy.get('#passwordInput')
        .type('Kayle');

    cy.get('#submit')
        .click();

    cy.url()
        .should('include', 'http://localhost:3000/users')
  })
})
