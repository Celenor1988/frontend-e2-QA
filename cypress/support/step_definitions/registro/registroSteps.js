import { When, Then, And } from '@badeball/cypress-cucumber-preprocessor';

When('hace clic en "Crear Artículo"', () => {
  cy.contains('Crear Artículo').click();
});

When('completa el formulario con datos del producto Iphone 16', () => {
  cy.get('input[placeholder="Ej: COCA-600"]').type('SKU-24');
  cy.get('input[placeholder="Ej: Coca-Cola 600ml Vidrio Retornable"]').type('Iphone 16');

  cy.get('input').eq(2).clear().type('1');         
  cy.get('input').eq(3).clear().type('100000');    
  cy.get('input').eq(4).clear().type('700000');    

  cy.get('select').select('Unidad');
  cy.contains('Guardar Cambios').click();
});

Then('debería ver el nuevo artículo registrado correctamente', () => {
  cy.contains('SKU-24').should('exist');
  cy.contains('Iphone 16').should('exist');
});
