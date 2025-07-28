Feature: Registro de artículos

  Scenario: Usuario registrado puede registrar un nuevo artículo Iphone 16
    Given el usuario accede al sistema
    When inicia sesión con credenciales válidas
    And navega a la sección de artículos
    And hace clic en "Crear Artículo"
    And completa el formulario con datos del producto Iphone 16
    Then debería ver el nuevo artículo registrado correctamente
