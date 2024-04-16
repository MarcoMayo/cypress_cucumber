import 'cypress-mochawesome-reporter/cucumberSupport';
import {Given, When, Then } from("@badeball/cypress-cucumber-preprocessor");

Given("El usuario esta en la pagina principal", () => {
    cy.visit("https://www.saucedemo.com/v1/");
    cy.viewport(1536, 960)
})

When("Ingresa credenciales", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
})

Then("Puede ver la pagina de productos", () => {
    cy.get(".product_label").should("be.visible")
    .and("have.text", "Products");
});

When("Agrega el producto {string}", (product_label) => {
    cy.contains(product_label).parents(".inventory_item").find('button').click();
})

Then("Puede ver el carrito con un producto", () => {
    cy.get("#shopping_cart_container span").should("have.text", "2");
});

When("Navega hasta Checkout", () => {
    cy.get("#shopping_cart_container").click();
    cy.get('.btn_action').click();
})

Then("Puede ver la page {string}", (name_page) => {
    cy.get('.subheader').should("have.text", name_page);
});