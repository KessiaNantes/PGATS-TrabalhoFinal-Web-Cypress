class Contato{
    preencherContato(){
        cy.get('.contact-form h2').should('be.visible').and('have.text', 'Get In Touch')
        cy.get('[data-qa="name"]').type('joao alves')
        cy.get('[data-qa="email"]').type('teste_1@gmail.com')
        cy.get('[data-qa="subject"]').type('Titulo')
        cy.get('[data-qa="message"]').type('Mensagem')

        cy.fixture('example.json').as('arquivo')
        cy.get('input[name="upload_file"]').selectFile('@arquivo')

        cy.get('[data-qa="submit-button"]').click()
        return this;
    }

    verificarContatoEnviado(){
        cy.get('.status').should('contain', 'Success!')
        return this;
    }
}

export default new Contato()