import { byTestCy } from "../support/commands";

describe("Navigate tour", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Basic navigation home xl screen", () => {
    cy.viewport(1460, 750);
    cy.get(byTestCy("admin-roll-up-menu")).click();
  });
  it("Basic navigation home lg screen", () => {
    cy.viewport(1230, 750);
    cy.get(byTestCy("admin-roll-up-menu")).click();
  });
  it("Basic navigation home md screen", () => {
    cy.viewport(800, 750);
    cy.get(byTestCy("admin-roll-up-menu")).click();
  });
  it("Basic navigation home sm screen", () => {
    cy.viewport(485, 750);
    cy.get(byTestCy("admin-roll-up-menu")).click();
  });
});
