# Teste Desbravador Software

Realizei o teste de automação utilizando o Cypress, utilizando a modelagem de teste E2E (End-to-End).

URLs
Foi verificado que a URL:
https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050
abre normalmente com o teste automatizado.
Já a URL:
https://reservas.desbravador.com.br/1111, apresenta um problema no calendário, onde todas as datas ficam indisponíveis para reserva e não podem ser selecionadas.
Quando a URL /1111 é aberta diretamente pelo Edge, ela altera automaticamente para:
https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050
Após essa alteração, o calendário funciona normalmente.
Porém, durante o teste automatizado, essa alteração não acontece automaticamente. Por isso, foi necessário utilizar a URL final diretamente no teste.

Teste de pagamento
Em relação ao teste de pagamento com o cartão fornecido no PDF, não foi possível utilizar a mesma data de validade informada, pois a data estava inferior à data atual e o sistema não permitia prosseguir.

CAPTCHA
O fluxo de reserva foi automatizado com sucesso até a etapa de CAPTCHA.
A resolução do CAPTCHA permanece como uma etapa manual devido à natureza do mecanismo de segurança.



*CT-001 — Informar um voucher inexistente*
Objetivo
Verificar se o sistema impede a aplicação de um voucher inexistente e não concede descontos não autorizados.
Cenário em Gherkin
Feature: Validação de voucher
  Scenario: Informar um voucher inexistente
    Given que o usuário realizou uma pesquisa de hospedagem válida
    And está na etapa de aplicação de voucher
    When informar um código de voucher inexistente
    And solicitar a aplicação do voucher
    Then o sistema deve rejeitar o voucher
    And não deve aplicar nenhum desconto ao valor da reserva
Justificativa da escolha
A escolha desse teste é importante para verificar se o sistema possui uma validação adequada dos vouchers informados pelo cliente.
Caso um usuário consiga inserir um código aleatório e obter um desconto não autorizado, isso pode gerar impacto financeiro para o estabelecimento e permitir benefícios que não foram concedidos.
Por esse motivo, foi considerado importante validar que vouchers inexistentes sejam rejeitados e que nenhum desconto seja aplicado à reserva.
Resultado
O sistema rejeitou o voucher inexistente e não aplicou desconto indevido.

*CT-002 — Validar cálculo do valor da diária no resumo da reserva*
Objetivo
Verificar se o valor apresentado no resumo da reserva corresponde corretamente ao cálculo realizado para a hospedagem e se eventuais descontos são apresentados de forma transparente.
Cenário em Gherkin
Feature: Cálculo do valor da reserva
  Scenario: Validar o valor da diária no resumo da reserva
    Given que o usuário realizou uma pesquisa de hospedagem válida
    And selecionou uma acomodação
    When avançar para o resumo da reserva
    Then o sistema deve apresentar corretamente o valor da diária
    And o valor total deve corresponder aos valores apresentados na reserva
    And caso exista algum desconto automático o desconto deve ser apresentado de forma clara no resumo
Justificativa da escolha
Este teste foi selecionado porque, durante a execução exploratória do sistema, foi identificada uma divergência entre o valor esperado da hospedagem e o valor apresentado no resumo da reserva.
Por se tratar de uma informação diretamente relacionada ao pagamento, é importante que o resumo apresente de forma clara a composição do valor final.
Caso exista algum desconto automático aplicado pelo sistema, ele também deve ser informado ao cliente, permitindo que o usuário compreenda como o valor final da reserva foi calculado.
Resultado
O cenário foi automatizado e utilizado para validar o cálculo apresentado no resumo da reserva.

*CT-003 — Validar número de cartão de crédito inválido*
Objetivo
Verificar se o sistema identifica e rejeita um número de cartão de crédito inválido durante a etapa de pagamento.
Cenário em Gherkin
Feature: Validação do pagamento
  Scenario: Informar um número de cartão de crédito inválido
    Given que o usuário possui uma reserva válida
    And está na etapa de pagamento
    When informar um número de cartão de crédito inválido
    And tentar finalizar o pagamento
    Then o sistema deve rejeitar a tentativa de pagamento
    And deve apresentar a mensagem "Cartão de crédito inválido"
Justificativa da escolha
Este teste foi selecionado para verificar se o sistema realiza a validação do número do cartão antes de permitir a conclusão do pagamento.
Essa validação é importante para impedir que dados inválidos avancem no processo de pagamento e para garantir que tentativas de transação com informações incorretas sejam devidamente rejeitadas pelo sistema.
Durante a execução, foi utilizado um número de cartão inválido em ambiente de teste, sendo esperado que o sistema apresentasse a mensagem "Cartão de crédito inválido".
Resultado
O sistema identificou o número inválido e apresentou corretamente a mensagem:
Cartão de crédito inválido

*CT-004 — Validar preenchimento dos dados obrigatórios*
Objetivo
Verificar se o sistema impede a realização do cadastro quando os campos obrigatórios não são preenchidos.
Cenário em Gherkin
Feature: Validação do cadastro
  Scenario: Tentar realizar cadastro sem preencher os campos obrigatórios
    Given que o usuário está na tela de cadastro
    And não preenche nenhum dos campos obrigatórios
    When clicar no botão de registro
    Then o sistema não deve permitir a conclusão do cadastro
    And deve apresentar a mensagem "Campo obrigatório"
    And os campos E-mail, Senha, Confirmação de senha, Primeiro nome
      e Sobrenome devem ser identificados como obrigatórios
Justificativa da escolha
Este teste foi escolhido para garantir que as informações essenciais do cliente sejam preenchidas antes da criação do cadastro.
A validação dos campos obrigatórios contribui para evitar cadastros incompletos e a ausência de informações importantes para a utilização adequada do sistema.
Durante a execução, foram identificados cinco campos obrigatórios:
E-mail
Senha
Confirmação de senha
Primeiro nome
Sobrenome
Ao tentar realizar o cadastro sem preencher as informações, o sistema deve apresentar a mensagem "Campo obrigatório" nos campos correspondentes.
Resultado
O sistema identificou corretamente os cinco campos obrigatórios e impediu o avanço do cadastro sem o preenchimento das informações necessárias.


