Feature: Validación de acceso al sistema

  Scenario: Usuario no registrado intenta acceder al sistema
    Given el usuario accede al sistema
    When ingresa credenciales inválidas
    Then el sistema debe denegar el acceso

