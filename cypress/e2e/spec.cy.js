describe("Funcionalidade: contato", () => {
  it.only("Deve preencher o formulário de contato com sucesso", () => {
    cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').type('leandro carlos')
    cy.get('[name="email"]').type('leandro@example.com')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')
  });


  it.only("Deve validar mensagens de erro ao enviar sem preencher nome", () => {
    cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').clear();
    cy.get('[name="email"]').type('leandro.carlos@example.com');
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')
    //Resultado esperado
  });


  it.only("Deve validar mensagens de erro ao enviar sem preencher e-mail", () => {
    cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').type('leandro carlos');
    cy.get('[name="email"]').clear();
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail')
  });


  it.only("Deve validar mensagens de erro ao enviar sem selecionar o assunto", () => {
    cy.visit('http://localhost:3000/index.html')
    cy.get("[name='name']").type('leandro carlos');
    cy.get('[name="email"]').type('leandro@example.com');
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto')
  });


  it.only("Deve validar mensagens de erro ao enviar sem preencher mensagem", () => {
    cy.visit('http://localhost:3000/index.html')
    cy.get("[name='name']").type('leandro carlos');
    cy.get('[name="email"]').type('leandro@example.com');
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem')
  });
});