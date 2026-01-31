class Pagamento{
    preencherDadosDePagamento(){
        cy.get('[data-qa="name-on-card"]').type('cartao teste')
        cy.get('[data-qa="card-number"]').type('8432 9823 9823 9823')
        cy.get('[data-qa="cvc"]').type('558')
        cy.get('[data-qa="expiry-month"]').type('05')
        cy.get('[data-qa="expiry-year"]').type('5587')
        return this;
    }

    submeterPagamento(){
        cy.get('[data-qa="pay-button"]').click()
        return this;
    }

    verificarMensagemDeSucesso(){
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
        return this;
    }
}

export default new Pagamento()