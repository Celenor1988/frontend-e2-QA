Feature: Actualización de artículos

  Scenario: Usuario registrado actualiza el producto Iphone 16 a Iphone 16 Pro Max
    Given el usuario accede al sistema
    When inicia sesión con credenciales válidas
    And navega a la sección de artículos
    And edita el producto Iphone 16
    And actualiza el nombre a Iphone 16 Pro Max
    Then visualiza el producto actualizado con el nuevo nombre
