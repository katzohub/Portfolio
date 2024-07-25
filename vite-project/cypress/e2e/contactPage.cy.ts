import { byTestCy } from "../support/commands";

describe("Navigate tour", () => {
  beforeEach(() => {
    cy.visit("/contact-me");
  });
  it("Basic navigation home xl screen", () => {
    cy.viewport(1460, 750);
    cy.contains("_contact-me").should("exist");
    cy.get(byTestCy("mail-contact"))
      .should("have.attr", "href")
      .and("include", "mailto:tomasolsiak1@gmail.com");

    cy.get(byTestCy("tel-contact"))
      .should("have.attr", "href")
      .and("include", "tel:+421915515974");

    cy.contains("message").should("exist");
    cy.contains("addEventListener").should("exist");

    cy.wait(1200);
    cy.contains("find-me-also-in").should("be.visible").click();
    cy.wait(1200);
    cy.contains("Instagram account").should("be.visible");
    cy.contains("find-me-also-in").should("exist").click();
    cy.contains("Instagram account").should("not.be.visible");
    cy.get(byTestCy("name-field")).click().type("Tomas");
    cy.get(byTestCy("email-field")).click().type("tomas.2580@azet.si");
    cy.get(byTestCy("message-area"))
      .click()
      .type("Great job Tomas ! This is coll page.");
    cy.get(byTestCy("submit-email")).click();
  });
  //   it("Basic navigation home lg screen", () => {
  //     cy.viewport(1229, 750);
  //   });
  //   it("Basic navigation home md screen", () => {
  //     cy.viewport(799, 750);
  //   });
  //   it("Basic navigation home sm screen", () => {
  //     cy.viewport(485, 750);
  //   });
});
