import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('el usuario accede al sistema', () => {
  cy.visit('https://test-adl.leonardojose.dev');
});

When('inicia sesión con credenciales válidas', () => {
  cy.get('input[type="email"]').type('tester@adl.com');
  cy.get('input[type="password"]').type('testerEngineer');
  cy.contains('button', 'Ingresar').click();
});

When('navega a la sección de artículos', () => {
  cy.contains('Entidades').click();
  cy.contains('Artículos').click();
});

Then('debería ver el listado de productos', () => {
  cy.contains('Listado de Artículos').should('be.visible');
  cy.get('table').should('exist');
  cy.get('table').find('tr').its('length').should('be.gte', 2);
});
