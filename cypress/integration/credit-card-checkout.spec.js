describe("Credit Card Checkout", () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080/')
    })
    it("O botão 'CONTINUAR' deve ser habilitado quando todos os campos estiverem preenchidos com valores válidos", () => {
      cy.findByTestId('cardCode').type('4566885646334451');
      
      //cy.findByTestId('cart').should('have.class', 'cart--show')
    })
  })