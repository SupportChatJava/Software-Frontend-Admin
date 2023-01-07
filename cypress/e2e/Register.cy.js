describe('Register', () => {
  it('Navigate to register page', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Register').click();
  })

  it('Create account', () => {
    cy.visit('http://localhost:3000/Register')
    cy.get('#emailInput')
        .type('User4@email.com');

    cy.get('#passwordInput')
        .type('User1');

    cy.get('#submit')
        .click();

    cy.url()
        .should('include', 'http://localhost:3000/login')

  })
})