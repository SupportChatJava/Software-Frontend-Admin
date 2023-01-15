describe('Detail', () => {
  it('Navigate to users page', () => {
    cy.visit('http://localhost:3000/Users')

    cy.contains('Pieter').click();

    cy.url()
        .should('include', 'http://localhost:3000/user/3')
  })


})
