describe('Login', () => {
  it('Edit user', () => {
    cy.visit('http://localhost:3000/user/3')

    cy.contains('Edit').click();


    cy.get('#emailInput')
        .type('Pieter22@email.com');

    cy.get('#passwordInput')
        .type('Pieter22');

    cy.get('#submit')
        .click();

    cy.url()
        .should('include', 'http://localhost:3000/user/3')

    cy.get("#email")
        .contains("Pieter22@email.com")

    cy.get("#password")
        .contains("Pieter22")


    // cy.get('#password')
    //     .should('include', "Pieter22")
  })
})
