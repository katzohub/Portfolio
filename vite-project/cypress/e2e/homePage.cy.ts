import { byTestCy } from "../support/commands";

const loopTest = () => {
  cy.viewport(1460, 750);
  cy.contains("Tomas Olsiak").should("be.visible");
  cy.contains("complete the game to continue").should("be.visible");
  cy.contains("find my profile on Github:").should("be.visible");
  cy.get(byTestCy("github-link-porfile"))
    .should("have.attr", "href")
    .and("include", "https://github.com/katzohub");
  cy.get(byTestCy("start-game")).should("be.visible").click();
  cy.wait(2500);
  cy.get(byTestCy("download-cv")).should("be.visible").click();
};

describe("Navigate tour", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Basic navigation home xl screen", () => {
    cy.viewport(1460, 750);
    loopTest();
  });
  it("Basic navigation home lg screen", () => {
    cy.viewport(1229, 750);
    loopTest();
  });
  it("Basic navigation home md screen", () => {
    cy.viewport(799, 750);
    loopTest();
  });
  it("Basic navigation home sm screen", () => {
    cy.viewport(485, 750);
    loopTest();
  });
});
