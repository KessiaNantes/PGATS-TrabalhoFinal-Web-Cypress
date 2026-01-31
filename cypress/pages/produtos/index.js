class Produtos{
    verificarAcessoAosProdutos(){
        cy.url().should('contain', 'products')
        return this;
    }

    verificarExibicaoDaListaDeProdutos(){
        cy.get('.single-products')
            .should('be.visible').
            and('have.length.at.least', 3)
        return this;
    }

    acessarOPrimeiroProduto(){
        cy.get('.single-products')
            .first()
            .parent()
            .contains('View Product')
            .click()
        return this;
    }

    buscarProduto(produto){
        cy.get('input#search_product').type(produto)
        cy.get('button#submit_search').click()
        return this;
    }

    verificarBuscaEfetuada(){
        cy.get('.title').should('be.visible').and('contain', 'Searched Products')
        cy.get('.single-products').should('be.visible').and('have.length.at.least', 3)
        return this;
    }


}

export default new Produtos()