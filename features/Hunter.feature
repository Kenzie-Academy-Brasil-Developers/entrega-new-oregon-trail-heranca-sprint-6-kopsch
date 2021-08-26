# language: pt

Funcionalidade: Hunter
Como um Hunter
Eu devo caçar comida
Para que eu possa abastecer as refeições dos Travelers.

Contexto:
Dado um Hunter de nome "Pedro"
E ele sempre começa a viagem com 2 refeições
E ele começa a viagem saudável.

Cenário: Caçou para conseguir mais refeições
Quando o Hunter saiu para caçar 1 vezes
Então a quantidade do Hunter de refeições deve ser igual a 7

Cenário: Comeu e seguiu saudável
Quando o Hunter parar para comer 1 vezes
Então a quantidade do Hunter de refeições deve ser igual a 0
E ele permanece saudável

Cenário: Comeu e ficou doente
Quando o Hunter parar para comer 2 vezes
Então a quantidade do Hunter de refeições deve ser igual a 0
E ele fica doente

Cenário: Deu menos refeições do que possuia para um viajante
Quando o Hunter dar 2 refeições para um viajante
Então a quantidade do Hunter de refeições deve ser igual a 0

Cenário: Tentou dar mais refeições do que possuia para um viajante
Quando o Hunter tentar dar 3 refeições para um viajante
Então a quantidade do Hunter de refeições deve ser igual a 2