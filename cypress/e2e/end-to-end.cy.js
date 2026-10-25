/// <reference types="cypress"/>

describe('Fluxo End-to-End: Cadastro e Login no Hub de Leitura', () => {
    it('Deve realizar o cadastro de um novo usuário e em seguida fazer login com sucesso', () => {
        //BOA PRÁTICA: Gerar dados dinâmicos para o e-mail
        const emailDinamico = 'usuario_${Date.now()}@teste.com';
        const senhaDinamica = 'user123';

        //1.Acessar a página de cadastro
        cy.visit('http://localhost:3000/register.html')

        //2.Peencher e enviar o formulário de cadastro
        cy.get('#name').type('LEANDRO CARLOS DA SILVA')
        cy.get('#email').type('emailDinamico')
        cy.get('#phone').type('81997836080');
        cy.get('#password').type('admin123')
        cy.get('#confirm-password').type('admin123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()


        //3.Validar o cadastro e prosseguir para o login
        //se não houver pop-up, podemos validar que o botão foi clicado ou simplesmente vançar para a página de login:
        cy.visit('http://localhost:3000/login.html');
        cy.log(emailDinamico, senhaDinamica);

        //4, 5 e 6. Acessar login, preencher e validar usando o seu comando customizado!
        cy.visit('http://localhost:3000/login.html');
        cy.log(emailDinamico, senhaDinamica);
    });

});


