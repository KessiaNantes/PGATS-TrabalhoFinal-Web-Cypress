class Carrinho{
    irParaCheckout(){
        cy.contains('Proceed To Checkout').click()
        return this;
    }

    verificarDetalhes(){
        cy.contains('Address Details').should('be.visible')
        cy.contains('Review Your Order').should('be.visible')
        return this;
    }

    preencherDescricaoESubmeter(desc){
        cy.get('.form-control').type(desc)
        cy.contains('Place Order').click()
        return this;
    }


}

export default new Carrinho()