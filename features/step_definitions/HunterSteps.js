const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const { viajante } = require("../../app");
const { cacador } = require("../../app");

Given("um Hunter de nome {string}", function (string) {
  return (cacador.nome = string);
});

Given("ele sempre começa a viagem com {int} refeições", function (int) {
  return (cacador.food = int);
});

Given("ele começa a viagem saudável.", function () {
  return cacador._isHealthy;
});

When("o Hunter saiu para caçar {int} vezes", function (int) {
  for (let i = 0; i < int; i++) {
    cacador.hunt();
  }
});

Then(
  "a quantidade do Hunter de refeições deve ser igual a {int}",
  function (int) {
    cacador.food = int;
  }
);

When("o Hunter parar para comer {int} vezes", function (int) {
  for (let i = 0; i < int; i++) {
    cacador.eat();
  }
});

Then("ele permanece saudável", function () {
  return assert.strictEqual(cacador._isHealthy, true);
});

Then("ele fica doente", function () {
  return assert.strictEqual(cacador._isHealthy, false);
});

When("o Hunter dar {int} refeições para um viajante", function (int) {
  return cacador.giveFood(viajante, int);
});

When('o Hunter tentar dar {int} refeições para um viajante', function (int) {
    return cacador.giveFood(viajante, int);
    });
