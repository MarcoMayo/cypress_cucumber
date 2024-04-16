import 'cypress-mochawesome-reporter/cucumberSupport';
import {Given, When, Then } from("@badeball/cypress-cucumber-preprocessor");

Given("El usuario inicia sesión con usuario {string} y contraseña {string}", (firstName, lastName) => {

  cy.visit("https://www.saucedemo.com/v1/");
  cy.viewport(1536, 960)
  cy.get("#user-name").type(firstName);
  cy.get("#password").type(lastName);
  cy.get("#login-button").click();

})