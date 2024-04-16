Feature: Inicio sesion
  Scenario: exitoso
    Given El usuario esta en la pagina principal
    When Ingresa credenciales
    Then Puede ver la pagina de productos

  Scenario: Agregar productos de forma exitosa
    Given El usuario inicia sesión con usuario "standard_user" y contraseña "secret_sauce"    
    When Agrega el producto "Labs Backpack"
    And Agrega el producto "Sauce Labs Onesie"
    Then Puede ver el carrito con un producto

  Scenario: ARealizar checkout forma exitosa
    Given El usuario inicia sesión con usuario "standard_user" y contraseña "secret_sauce"    
    When Agrega el producto "Sauce Labs Onesie"
    And Navega hasta Checkout
    Then Puede ver la page "Checkout: Your Information"