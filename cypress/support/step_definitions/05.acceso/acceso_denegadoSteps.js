import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("ingresa credenciales inválidas", () => {
  cy.get('input[type="email"]').type("usuario@invalido.com");
  cy.get('input[type="password"]').type("claveIncorrecta123");
  cy.contains("button", "Ingresar").click();
});

Then("el sistema debe denegar el acceso", () => {

  cy.url().should("include", "/login");

  cy.contains("Las credenciales proporcionadas son incorrectas", { timeout: 5000 })
    .should("be.visible");
});
