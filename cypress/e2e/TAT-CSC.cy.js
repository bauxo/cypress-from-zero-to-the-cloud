describe("TAT Customer Service Center", () => {
  beforeEach(() => {
    cy.visit("/cypress-from-zero-to-the-cloud/src/index.html");
  });

  it("checks the application title", () => {
    cy.title().should("eq", "TAT Customer Service Center");
  });

  it("fills in the required fields, submits the form, and checks for success", () => {
    cy.get("#firstName").type("Bautista");
    cy.get("#lastName").type("Romero");
    cy.get("#email").type("bauti.romero@hotmail.com");
    cy.get("#open-text-area").type("Oye como va");

    cy.contains("button", "Send").click();

    cy.get(".success").should("be.visible");
  });

  it("displays an error message when submitting the form with an email with invalid formatting", () => {
    cy.get("#email").type("bauti.romero12333");
    cy.get(".button").click();
    cy.get(".error").should("be.visible");
  });

  it("Validate Phone Number", () => {
    cy.get("#phone").type("Hello").should("be.empty");
  });

  it("Type and Clear", () => {
    cy.get("#firstName")
      .type("Bautista")
      .should("have.value", "Bautista")
      .clear()
      .should("have.value", "");
    cy.get("#lastName")
      .type("Romero")
      .should("have.value", "Romero")
      .clear()
      .should("have.value", "");
    cy.get("#email")
      .type("bauti.romero@hotmail.com")
      .should("have.value", "bauti.romero@hotmail.com")
      .clear()
      .should("have.value", "");
    cy.get("#open-text-area")
      .type("Oye como va")
      .should("have.value", "Oye como va")
      .clear()
      .should("have.value", "");
  });

  it("displays an error message when submitting the form without filling the required fields", () => {
    cy.contains("button", "Send").click();

    cy.get(".error").should("be.visible");
  });

  it("successfully submits the form using a custom command", () => {
    cy.fillMandatoryFieldsAndSubmit();

    cy.get(".success").should("be.visible");
  });

  it("selects a product (YouTube) by its content", () => {
    cy.get("#product").select("youtube").should("have.value", "youtube");
  });

  it("selects a product (Blog) by its index", () => {
    cy.get("#product").select(1).should("have.value", "blog");
  });

  it("checks the type of service Feedback", () => {
    cy.get('input[type = "radio"][value = "feedback"]')
      .check()
      .should("be.checked");
  });

  it("checks each type of service", () => {
    cy.get("#support-type")
      .find('input[type = "radio"]')
      .each((typeOfService) => {
        cy.wrap(typeOfService).check().should("be.checked");
      });
  });

  it("checks both checkboxes, then unchecks the last one", () => {
    cy.get('input[type = "checkbox"]')
      .check()
      .should("be.checked")
      .last()
      .uncheck()
      .should("not.be.checked");
  });
});
