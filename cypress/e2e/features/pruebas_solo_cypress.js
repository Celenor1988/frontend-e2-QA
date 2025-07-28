describe('Login y consulta de productos', () => {
  it('Usuario registrado puede loguearse y ver productos (Artículos)', () => {
    cy.visit('https://test-adl.leonardojose.dev');

    cy.get('input[type="email"]').type('tester@adl.com');
    cy.get('input[type="password"]').type('testerEngineer');
    cy.contains('button', 'Ingresar').click();

    cy.contains('Bienvenido al sistema ERP.').should('be.visible');

    cy.contains('Entidades').click();
    cy.contains('Artículos').click();

    cy.contains('Listado de Artículos').should('be.visible');
    cy.get('table').should('exist');
    cy.get('table').find('tr').its('length').should('be.gte', 2); 
  });
}); 

describe('Registro de nuevo artículo', () => {
  it('Usuario registrado puede crear un nuevo artículo Iphone 16', () => {
    cy.visit('https://test-adl.leonardojose.dev');

    cy.get('input[type="email"]').type('tester@adl.com');
    cy.get('input[type="password"]').type('testerEngineer');
    cy.contains('button', 'Ingresar').click();

    cy.contains('Bienvenido al sistema ERP.').should('be.visible');

    cy.contains('Entidades').click();
    cy.contains('Artículos').click();

    cy.contains('Crear Artículo').click();

    cy.get('input[placeholder="Ej: COCA-600"]').type('SKU-24');
    cy.get('input[placeholder="Ej: Coca-Cola 600ml Vidrio Retornable"]').type('Iphone 16');

    cy.get('input').eq(2).clear().type('1'); 
    cy.get('input').eq(3).clear().type('100000'); 
    cy.get('input').eq(4).clear().type('700000'); 

    cy.get('select').select('Unidad');

    cy.contains('Guardar Cambios').click();

    cy.contains('SKU-24').should('exist');
    cy.contains('Iphone 16').should('exist');
  });
}); 

describe('Actualizar producto Iphone 16', () => {
  it('Usuario registrado puede actualizar Iphone 16 a Iphone 16 Pro Max', () => {
    cy.visit('https://test-adl.leonardojose.dev');

    cy.get('input[type="email"]').type('tester@adl.com');
    cy.get('input[type="password"]').type('testerEngineer');
    cy.contains('button', 'Ingresar').click();

    cy.contains('Entidades').click();
    cy.contains('Artículos').click();

    cy.contains('.border', 'Código: SKU-24').within(() => {
      cy.get('button').eq(0).click(); 
    });

    cy.get('#name')
      .clear()
      .click()
      .type('{selectall}{del}')
      .invoke('val')
      .should('eq', '');

    cy.get('#name').type('Iphone 16 Pro Max');

    cy.contains('Guardar Cambios').click();

    cy.contains('Iphone 16 Pro Max').should('exist');
    cy.contains('SKU-24').should('exist');
  });
});




describe('Eliminar producto Iphone 16 Pro Max', () => {
  it('Usuario registrado puede eliminar el producto Iphone 16 Pro Max', () => {
    cy.visit('https://test-adl.leonardojose.dev');

    cy.get('input[type="email"]').type('tester@adl.com');
    cy.get('input[type="password"]').type('testerEngineer');
    cy.contains('button', 'Ingresar').click();

    cy.contains('Entidades').click();
    cy.contains('Artículos').click();

    cy.contains('.border', 'Código: SKU-24').within(() => {
      cy.get('.ml-4').click({ force: true }); 
    });

    cy.contains('Iphone 16 Pro Max').should('not.exist');
    cy.contains('SKU-24').should('not.exist');
  });
}); 

describe('Usuario no registrado no puede acceder al sistema', () => {
  it('Redirige al login si intenta acceder directamente a /articulos sin autenticación', () => {

    cy.visit('https://test-adl.leonardojose.dev/articulos', {
      failOnStatusCode: false 
    });

    cy.url().should('include', '/login');

    cy.contains('Email').should('be.visible');
    cy.contains('Contraseña').should('be.visible');
  });
});


