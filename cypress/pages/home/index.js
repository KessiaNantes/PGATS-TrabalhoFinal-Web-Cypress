class Home{
    verificarHome(){
        cy.url().should('contain', 'https://www.automationexercise.com/')
        return this;
    }

    realizarScrollAoSubscription(){
        cy.get('input#susbscribe_email')
            .scrollIntoView()
        return this;
    }

    verificarExibicaoDoTextoSubscription(){
        cy.contains('h2', 'Subscription').should('be.visible')
        return this;
    }

    preencherSubscription(email){
        cy.get('input#susbscribe_email')
            .type(email)
        cy.get('button#subscribe').click()
        return this;
    }

    verificarSubscricaoComSucesso(){
        cy.contains('You have been successfully subscribed!').should('be.visible')
        return this;
    }
}

export default new Home()