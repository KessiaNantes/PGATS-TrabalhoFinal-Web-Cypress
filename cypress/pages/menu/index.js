class Menu{
    menus = {
        PRODUTOS: 'Products',
        LOGINCADASTRO: 'Signup',
        LOGOUT: 'Logout',
        CONTATO: 'Contact us',
        HOME: 'Home'
    }

    irParaProdutos(){
        cy.contains('Products').click()
    }

    irParaLoginCadastro(){
        cy.contains('Signup').click()
    }

    irPara(menu){
        cy.contains(menu).click()
        return this;
    }

    deletarConta(){
        cy.get('a[href="/delete_account"]').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        
        return this;
    }
}

export default new Menu()