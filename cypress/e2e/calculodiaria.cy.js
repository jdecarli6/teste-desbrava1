describe('Reserva de hotel', () => { // Cria um grupo de teste com o nome de Reserva de hotel
  it('acessar página de reservas', () => { // Cria um teste específico com esse nome
    cy.visit('https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050') // Vai abrir a URL informada no navegador 
    cy.viewport(1366,768); // Ajusta a resolução do site no teste
         cy.wait(8000); // Aguarda 8 segundos para o calendário carregar

    cy.get('.month1 > tbody > :nth-child(4) > :nth-child(5) > .day > div').click(); // Seleciona o dia 12 como data inicial da hospedagem
    cy.get('.month1 > tbody > :nth-child(4) > :nth-child(6) > .day > div').click(); // Seleciona o dia 17 como data final da hospedagem
         cy.wait(3000); // Aguarda 3 segundos para verificação do preenchinmento das informações
      cy.get('[name="calendar-adults"]').type('1');
    cy.get('.sc-hKMtZL').click(); // Clica no botão verificar disponibilidade
         cy.wait(3000); // Aguarda 3 segundos para carregamento das informações
    cy.get('.btn-add').click(); // Clica no botão para adicionar ao carrinho

const diariaEsperada = 1500
const quantidadeDiarias = 1
const totalEsperado = diariaEsperada * quantidadeDiarias

      cy.contains('Total das diárias')
        .parent()
          .should('contain', `R$ ${totalEsperado.toLocaleString('pt-BR', {
             minimumFractionDigits: 2
  })}`)












   }) // Fecha o teste "acessar página de reserva"
}) // Fecha o grupo de testes
