/// <reference types="cypress"/>

describe('Fluxo End-to-End: Cadastro e Login no Hub de Leitura', () => {
  it('Deve realizar o cadastro de um novo usuário e em seguida fazer login com sucesso', () => {
    // BOA PRÁTICA: gerar um e-mail dinâmico
    const emailDinamico = `usuario_${Date.now()}@teste.com`;
    const senhaDinamica = 'user123';

    // 1. Acessar a página de cadastro
    cy.visit('http://localhost:3000/register.html');

    // 2. Preencher e enviar o formulário de cadastro
    cy.get('#name').type('LEANDRO CARLOS DA SILVA');
    cy.get('#email').type(emailDinamico);
    cy.get('#phone').type('81997836080');
    cy.get('#password').type(senhaDinamica);
    cy.get('#confirm-password').type(senhaDinamica);
    cy.get('#terms-agreement').check();
    cy.get('#register-btn').click();

    // 3. Validar a mensagem de sucesso do cadastro
    cy.contains(/cadastro realizado com sucesso|cadastrado com sucesso|sucesso/i).should('be.visible');

    // 4. Acessar a página de login
    cy.visit('http://localhost:3000/login.html');

    // 5 e 6. Fazer login e validar o acesso ao dashboard
    cy.login(emailDinamico, senhaDinamica);
  });
});
