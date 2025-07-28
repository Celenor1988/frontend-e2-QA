Feature: Eliminación de artículos

  Scenario: Usuario registrado elimina el producto Iphone 16 Pro Max
    Given el usuario accede al sistema
    When inicia sesión con credenciales válidas
    And navega a la sección de artículos
    And elimina el producto Iphone 16 Pro Max
    Then el producto ya no aparece en la lista