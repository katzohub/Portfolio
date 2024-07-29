import { byTestCy } from "../support/commands";

const startTestingProjects = () => {
  cy.contains("_projects").should("exist");
  cy.contains("My first portfolio html,css and javascript").should("exist");
  cy.contains("My first menu for restaurant html,css and javascript").should(
    "exist"
  );
  cy.get(byTestCy("checkbox-html")).click();
  cy.contains("My first game html,css and javascript").should("exist");
  cy.get(byTestCy("checkbox-css")).click();
  cy.contains("My first mini project with php").should("exist");
  cy.get(byTestCy("checkbox-html")).click();
  cy.get(byTestCy("checkbox-css")).click();
  cy.wait(1200);
  cy.contains("Sorry.").should("be.visible");
  cy.contains("Please one checkbox click and view mine project.").should(
    "be.visible"
  );
  cy.wait(1200);
  cy.get(byTestCy("checkbox-scss")).click();
  cy.contains("My first menu for restaurant html,css and javascript").should(
    "exist"
  );
  cy.get(byTestCy("checkbox-typescript")).click();
  cy.contains("My next project with react").should("exist");
  cy.get(byTestCy("checkbox-mui")).click();
  cy.contains(
    "My upgraded portfolio with the new technologies I learned"
  ).should("exist");
  cy.get(byTestCy("checkbox-firebase")).click();
  cy.contains("My next mini project with react").should("exist");
};

describe("Navigate tour", () => {
  beforeEach(() => {
    cy.visit("/projects");
  });
  it("Basic navigation home xl screen", () => {
    cy.viewport(1460, 750);
    startTestingProjects();
  });
  it("Basic navigation home lg screen", () => {
    cy.viewport(1229, 750);
    startTestingProjects();
  });
  it("Basic navigation home md screen", () => {
    cy.viewport(799, 750);
    startTestingProjects();
  });
  it("Basic navigation home sm screen", () => {
    cy.viewport(485, 750);
    startTestingProjects();
  });
});
