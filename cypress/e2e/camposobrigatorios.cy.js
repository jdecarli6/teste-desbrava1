describe('Reserva de hotel', () => { // Cria um grupo de teste com o nome de Reserva de hotel
  it('acessar página de reservas', () => { // Cria um teste específico com esse nome
    cy.visit('https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050') // Vai abrir a URL informada no navegador 
    cy.viewport(1366,768); // Ajusta a resolução do site no teste
         cy.wait(8000); // Aguarda 8 segundos para o calendário carregar

    cy.get('.link.nav-item > .link').click(); // Clica no botão de Registrar-se
    cy.get('.sc-hKMtZL').click(); // Clica no botão de Cadastrar, para dar o erro informando que os campos obrigatórios não foram preenchidos
          cy.wait(3000); // Aguarda 3 segundos para verificação do erro
    cy.get('[name="email"]').type('joaoteste@gmail.com'); // Preenche e-mail
    cy.get('[name="password"]').type('123456'); // Preenche senha
    cy.get('[name="passwordConfirmation"]').type('1234567'); // Repete a senha errada para informar que as senhas não conferem
          cy.wait(3000); // Aguarda 3 segundos para verificação do preenchinmento das informações
    cy.get('[name="passwordConfirmation"]')
      .clear() // Apaga a senha errada
        .type('123456'); // Repete a senha
    cy.get('[name="firstName"]').type('João'); // Informa o nome
    cy.get('[name="lastName"]').type('Teste'); // Informa o sobrenome
          cy.wait(3000); // Aguarda 3 segundos para verificação do preenchinmento das informações
    cy.get('.sc-hKMtZL').click(); // Clica no botão de Cadastrar novamente para validar os dados





   }) // Fecha o teste "acessar página de reserva"
}) // Fecha o grupo de testes