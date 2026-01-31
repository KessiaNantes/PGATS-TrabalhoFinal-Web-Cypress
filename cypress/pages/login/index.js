class Login{
    preencherLogin(usuario, senha){
        cy.contains('Login to your account').should('be.visible')
        
        cy.get('[data-qa="login-email"]').type(usuario)
        cy.get('[data-qa="login-password"]').type(senha, { log: false })

        cy.get('[data-qa="login-button"]').click()

        return this;
    }

    verificarSeLoginFoiConcluido(name){
        cy.get('i.fa-user').parent().should('contain', name)

        return this;
    }

    verificarErroAoLogar(){
        cy.get('.login-form form p').should('contain', 'Your email or password is incorrect!')
        return this;
    }

    verificarLogout(){
        cy.url().should('contain', 'login')
        return this;
    }

}

export default new Login()