const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const { viajante } = require("../../app");
const { doutor } = require("../../app");

Given("um Doctor com o nome {string}", function (string) {
  return (doutor.name = string);
});

When("o Doctor curar um Traveler doente", function () {
  return doutor.heal(viajante);
});

Then("O Traveler se torna saudável", function () {
  return assert.strictEqual(viajante._isHealthy, true);
});

When("o Doctor tentar curar um Traveler saudável", function () {
  return doutor.heal(viajante);
});

Then("o Traveler permanece saudável", function () {
  return assert.strictEqual(viajante._isHealthy, true);
});
