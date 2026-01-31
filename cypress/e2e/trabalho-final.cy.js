/// <reference types="cypress" />

import cadastro from '../pages/cadastro';
import login from '../pages/login';
import menu from '../pages/menu';
import contato from '../pages/contato';
import home from '../pages/home';
import produtos from '../pages/produtos';
import produto from '../pages/produto';
import carrinho from '../pages/carrinho';
import pagamento from '../pages/pagamento';


describe('Automation Exercise', () => {

    const signUpName = 'joao alves'
    const emailComCadastro = 'joao_alves_pgats@gmail.com'

    Cypress.config('defaultCommandTimeout', 3000)

    beforeEach(() => {
        cy.visit('/')
        home.verificarHome()
    });

    it('Test Case 1: Register User', () => {
        menu.irPara(menu.menus.LOGINCADASTRO)
        cadastro.gerarCadastro(signUpName)
        
        menu.deletarConta()
    });
    
    it('Test Case 2: Login User with correct email and password', () => {
        menu.irPara(menu.menus.LOGINCADASTRO)
        cadastro.gerarCadastro(signUpName)
        
        menu
            .irPara(menu.menus.LOGOUT)
            .irPara(menu.menus.LOGINCADASTRO)

        login
            .preencherLogin(Cypress.env('email'), '12345')
            .verificarSeLoginFoiConcluido(Cypress.env('signUpName'))
        
        menu.deletarConta()
        
    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        menu.irPara(menu.menus.LOGINCADASTRO)

        login
            .preencherLogin("testetesteteste0001@yahoo.com", '00000')
            .verificarErroAoLogar()
    });

    it('Test Case 4: Loggout user', () => {
        menu.irPara(menu.menus.LOGINCADASTRO)

        login
            .preencherLogin(emailComCadastro, '12345')
            .verificarSeLoginFoiConcluido('joao alves')

        menu.irPara(menu.menus.LOGOUT)

        login.verificarLogout()
    });

    it('Test Case 5: Register User with existing email', () => {
        menu.irPara(menu.menus.LOGINCADASTRO)
        
        cadastro
            .iniciarCadastro(signUpName, emailComCadastro)
            .verificarErroAoCadastrarEmailDuplicado()

    });

    it('Test Case 6: Contact us form', () => {
        menu.irPara(menu.menus.CONTATO)

        contato
            .preencherContato()
            .verificarContatoEnviado()

        menu.irPara(menu.menus.HOME)
        home.verificarHome()
        
    });

    it('Test Case 8: Verify all products and product detail page', () => {
        menu.irPara(menu.menus.PRODUTOS)

        produtos
            .verificarAcessoAosProdutos()
            .verificarExibicaoDaListaDeProdutos()
            .acessarOPrimeiroProduto()

        produto.verificarExibicaoDosDetalhesDoProduto()

    });

    it('Test Case 9: Search Product', () => {
        menu.irPara(menu.menus.PRODUTOS)

        produtos
            .verificarAcessoAosProdutos()
            .buscarProduto('Shirt')
            .verificarBuscaEfetuada()

    });

    it('Test Case 10: Verify Subscription in home page', () => {
        home
            .realizarScrollAoSubscription()
            .verificarExibicaoDoTextoSubscription()
            .preencherSubscription('email@gmail.com')
            .verificarSubscricaoComSucesso()

    });

    it('Test Case 15: Place Order: Register before Checkout', () => {
        menu.irPara(menu.menus.LOGINCADASTRO)
        cadastro.gerarCadastro(signUpName)

        menu.irPara(menu.menus.PRODUTOS)

        produtos.acessarOPrimeiroProduto()
        
        produto
            .adicionarAoCarrinho()
            .irParaCarrinho()

        carrinho
            .irParaCheckout()
            .verificarDetalhes()
            .preencherDescricaoESubmeter('Descrição aqui')

        pagamento
            .preencherDadosDePagamento()
            .submeterPagamento()
            .verificarMensagemDeSucesso()
        
        menu.deletarConta()

    });
});