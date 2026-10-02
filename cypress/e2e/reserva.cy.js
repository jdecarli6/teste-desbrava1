describe('Reserva de hotel', () => { // Cria um grupo de teste com o nome de Reserva de hotel
  it('acessar página de reservas', () => { // Cria um teste específico com esse nome
    cy.visit('https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050') // Vai abrir a URL informada no navegador 
    cy.viewport(1366,768); // Ajusta a resolução do site no teste
         cy.wait(8000); // Aguarda 8 segundos para o calendário carregar
    cy.get('.month1 > tbody > :nth-child(4) > :nth-child(4) > .day > div').click(); // Seleciona o dia 12 como data inicial da hospedagem
    cy.get('.month1 > tbody > :nth-child(4) > :nth-child(7) > .day > div').click(); // Seleciona o dia 17 como data final da hospedagem
         cy.wait(3000); // Aguarda 3 segundos para verificação do preenchinmento das informações
    cy.get('[name="calendar-adults"]').type('2'); // Informa 2 adultos
    cy.get('.btn-children').click(); // Clica no botão de informar se havera crianças na hospedagem
    cy.get('[name="faixa1"]').type('1') // Informa uma criança de até 11 anos
         cy.wait(5000); // Aguarda 5 segundos para verificação do preenchinmento das informações
    cy.get('.sc-hKMtZL').click(); // Clica no botão verificar disponibilidade
         cy.wait(8000); // Aguarda 8 segundos para carregar as informações
    cy.get('.btn-add > span').click(); // Clica no botão de adicionar a hospedagem ao carrinho
         cy.wait(3000); // Aguarda 3 segundos para verificação do preenchinmento das informações
    cy.get('.col-12 > .sc-hKMtZL').click(); // Clica no botão de continuar
         cy.wait(3000); // Aguarda 3 segundos para verificação do preenchinmento das informações
    cy.get('.col-md-3 > :nth-child(2)').click(); // Clica no botão para adicionar informações dos hóspedes
    cy.get(':nth-child(2) > :nth-child(1) > .mb-3 > .form-control').type('João Teste'); // Informa o nome do hóspede 1
       cy.get(':nth-child(2) > :nth-child(2) > .mb-3 > .form-control').type('joaoteste@gmail.com'); // Informa o e-mail do hóspede 1
    cy.get(':nth-child(3) > :nth-child(1) > .mb-3 > .form-control').type('Maria Teste'); // Informa o nome do hóspede 2
       cy.get(':nth-child(3) > :nth-child(2) > .mb-3 > .form-control').type('mariateste@gmail.com'); // Informa o e-mail do hóspede 2
    cy.get(':nth-child(5) > :nth-child(1) > .mb-3 > .form-control').type('Caio Teste'); // Informa o nome da criança
       cy.get(':nth-child(5) > :nth-child(2) > .mb-3 > .form-control').type('caioteste@gmail.com'); // Informa o e-mail da criança
         cy.wait(3000); // Aguarda 3 segundos para verificação do preenchinmento das informações
    cy.get(':nth-child(7) > .d-flex > .sc-hKMtZL').click();
         cy.wait(3000); // Aguarda 3 segundos para verificação do preenchinmento das informações
    cy.get('.col-12 > .sc-hKMtZL').click(); // Clica no botão de continuar
         cy.wait(2000); // Aguarda 2 segundos para carregamento das informações
    cy.get('[name="email"]').type('joaoteste@gmail.com'); // Informa o e-mail do pagador
    cy.get('[name="firstName"]').type('João'); // Informa o primeiro nome do pagador
    cy.get('[name="lastName"]').type('Teste'); // Informa o segundo nome do pagador
    cy.get('[name="documentType"]').select('RG'); // Seleciona RG no campo Tipo Documento
    cy.get('[name="document"]').type('1231345'); // Informa o RG do pagador
    cy.get('[name="telephone"]').type('49 9 9999-9999'); // Informa o telefone do pagador
    cy.get('.select__indicator').click(); // Clica no botão para selecionar o país
    cy.get('#react-select-2-option-0').click(); // Seleciona o país Brasil
    cy.get('[name="zipCode"]').type('89810030'); // Informa o CEP
    cy.get('.input-group > .btn').click(); // Busca o CEP
    cy.get('[name="number"]').type('4000 0000 0000 0044'); // Informa o número do cartão
    cy.get('[name="name"]').type('DESBRAVADOR SOFTWARE'); // Nome do cartão
    cy.get('[name="expiry"]').type('12/26'); // Informa a data de vencimento do cartão
    cy.get('[name="cvc"]').type('123'); // Informa o CVC do cartão
    cy.get(':nth-child(1) > .col-md-12 > .form-check > .form-check-input').click(); // Marca a opção que concorda com as políticas do hotel
    cy.wait(8000); // Aguarda 8 segundos para verificação do preenchinmento das informações
    cy.get('.sc-hKMtZL').click(); // Clica para finalizar

















  }) // Fecha o teste "acessar página de reserva"
}) // Fecha o grupo de testes