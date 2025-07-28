import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("edita el producto Iphone 16", () => {
  cy.contains(".border", "Código: SKU-24").within(() => {
    cy.get("button").eq(0).click(); 
  });
});

When("actualiza el nombre a Iphone 16 Pro Max", () => {
  cy.get("#name")
    .clear()
    .click()
    .type("{selectall}{del}")
    .invoke("val")
    .should("eq", "");

  cy.get("#name").type("Iphone 16 Pro Max");
  cy.contains("Guardar Cambios").click();
});

Then("visualiza el producto actualizado con el nuevo nombre", () => {
  cy.contains("Iphone 16 Pro Max").should("exist");
  cy.contains("SKU-24").should("exist");
});
