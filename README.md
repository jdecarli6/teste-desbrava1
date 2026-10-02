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
