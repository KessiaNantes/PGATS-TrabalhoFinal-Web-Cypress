class Cadastro {
    preencherFormulario(signUpName){

        const timestamp = new Date().getTime()
        const email = `mario_alves${timestamp}@gmail.com`

        Cypress.env('signUpName', signUpName)
        Cypress.env('email', email)

        cy.contains('New User Signup!').should('be.visible')
    
        this.iniciarCadastro(signUpName, email)

        cy.contains('Enter Account Information').should('be.visible')

        cy.get('input[type=radio]').check('Mr')

        cy.get('[data-qa="password"]').type('12345', { log: false })

        cy.get('[data-qa="days"]').select('5')
        cy.get('[data-qa="months"]').select('May')
        cy.get('[data-qa="years"]').select('2000')

        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        cy.get('[data-qa="first_name"]').type('Mario')
        cy.get('[data-qa="last_name"]').type('alves')
        cy.get('[data-qa="company"]').type('Company Teste')
        cy.get('[data-qa="address"]').type('Rua do Indio, n 42')
        cy.get('[data-qa="address2"]').type('Bairro Londrina')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('Toronto')
        cy.get('[data-qa="city"]').type('Toronto')
        cy.get('[data-qa="zipcode"]').type('ON M5B 2H1')
        cy.get('[data-qa="mobile_number"]').type('31900000000')
        cy.get('[data-qa="create-account"]').click()

        cy.url().should('includes', 'account_created')
        cy.contains('Account Created!').should('be.visible')

        cy.get('[data-qa="continue-button"]').click()

        return this;
    }

    iniciarCadastro(signUpName, email){
        cy.get('[data-qa="signup-name"]').type(signUpName)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.contains('button','Signup').click()

        return this;
    }

    verificarSeCadastroFoiConcluido(){
        cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))
        return this;
    }

    gerarCadastro(signUpName){
        this
            .preencherFormulario(signUpName)
            .verificarSeCadastroFoiConcluido()

        return this;
    }

    verificarErroAoCadastrarEmailDuplicado(){
        cy.get('.signup-form form p').should('contain', 'Email Address already exist!')
        return this;
    }
}

export default new Cadastro()