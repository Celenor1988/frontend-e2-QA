import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("elimina el producto Iphone 16 Pro Max", () => {
  cy.contains(".border", "Código: SKU-24").within(() => {
    cy.get(".ml-4").click({ force: true }); 
  });
});

Then("el producto ya no aparece en la lista", () => {
  cy.contains("Iphone 16 Pro Max").should("not.exist");
  cy.contains("SKU-24").should("not.exist");
});
