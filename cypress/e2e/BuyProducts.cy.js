describe('Cart', () => {
  it('Buy Products', () => {
    cy.visit('http://localhost:3000/Products');

    cy.get('#product6').click();
    cy.get('#product8').click();

    cy.get('#BuyButton')
        .click();

    cy.visit('http://localhost:3000/cart/user/1')

    cy.get('#BoughtProductNameTable');
    cy.get('#BoughtProductNamePlates');
  })
})
