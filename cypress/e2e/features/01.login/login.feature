Feature: Login y consulta de productos

  Scenario: Usuario registrado puede loguearse y ver productos
    Given el usuario accede al sistema
    When inicia sesión con credenciales válidas
    And navega a la sección de artículos
    Then debería ver el listado de productos

