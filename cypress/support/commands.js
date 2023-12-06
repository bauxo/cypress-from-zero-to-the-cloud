Cypress.Commands.add(
  "fillMandatoryFieldsAndSubmit",
  (
    data = {
      firstName: "Bautista",
      lastName: "Romero",
      email: "bauti.romero@hotmail.com",
      text: "Test",
    }
  ) => {
    cy.get("#firstName").type(data.firstName);
    cy.get("#lastName").type(data.lastName);
    cy.get("#email").type(data.email);
    cy.get("#open-text-area").type(data.text);
    cy.contains("button", "Send").click();
  }
);
