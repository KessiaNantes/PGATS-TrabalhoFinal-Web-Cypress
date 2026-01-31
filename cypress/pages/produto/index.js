class Produto{
    verificarExibicaoDosDetalhesDoProduto(){
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information p').should('be.visible').and('have.length', 4)
        cy.get('.product-information span span').should('be.visible')
        return this;
    }

    adicionarAoCarrinho(){
        cy.contains('button', 'Add to cart').click()
        return this;
    }

    irParaCarrinho(){
        cy.contains('View Cart').click()
        cy.url().should('contain', 'view_cart')
    }
}

export default new Produto()