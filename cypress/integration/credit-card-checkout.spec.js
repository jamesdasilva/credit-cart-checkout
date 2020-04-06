describe("Credit Card Checkout", () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080/')
    })
    it("O botão 'CONTINUAR' deve ser habilitado quanto todos os valores forem válidos", () => {
      cy.findByTestId('cardCode').type('4566885646334451');
      cy.findByTestId('people').type('James da Silva');
      cy.findByTestId('shelfLife').type('1111');
      cy.findByTestId('cvv').type('341');
      cy.findByTestId('installments').select('3X');
      cy.findByDisplayValue('CONTINUAR').should('be.not.disabled');
      })
    it("O botão 'CONTINUAR' deve permanecer desabilitado enquanto houver valores inválidos", () => {
      cy.findByTestId('cardCode').type('4566885646334451');
      cy.findByTestId('people').type('James da Silva');
      cy.findByTestId('shelfLife').type('1111');
      cy.findByTestId('cvv').type('341');
      cy.findByTestId('installments').select('3X');
      cy.findByDisplayValue('CONTINUAR').should('be.not.disabled');
    })
    it("O botão 'CONTINUAR' deve ficar desabilitado quando o campo 'validade' não estiver com valor válido", () => {
      cy.findByTestId('cardCode').type('4566885646334451');
      cy.findByTestId('people').type('James da Silva');
      cy.findByTestId('shelfLife').type('111');
      cy.findByTestId('cvv').type('341');
      cy.findByTestId('installments').select('3X');
      cy.findByDisplayValue('CONTINUAR').should('be.disabled');
    })
    it.only("A figura do cartão deve exibir o valor digitado no campo 'número do cartão'", () => {
      cy.findByTestId('cardCode').type('4566885646334451');
      cy.findByTestId('card-code-figure').contains('4566 8856 4633 4451');
    })
  })