import { byTestCy } from "../support/commands";

const fullWidtScreen = () => {
  cy.get(byTestCy("about-link")).click();
  cy.url().should("include", "/about-me");
  cy.get(byTestCy("project-link")).click();
  cy.url().should("include", "/projects");
  cy.get(byTestCy("contact-link")).click();
  cy.url().should("include", "/contact-me");
  cy.get(byTestCy("home-link")).click();
  cy.url().should("include", "/");
  cy.get(byTestCy("x-link"))
    .should("have.attr", "href")
    .and("include", "https://x.com/TOM3K_R34DY");
  cy.get(byTestCy("facebook-link"))
    .should("have.attr", "href")
    .and("include", "https://www.facebook.com/tomas.olsiak.37/");
  cy.get(byTestCy("linkedin-link"))
    .should("have.attr", "href")
    .and(
      "include",
      "https://www.linkedin.com/in/tom%C3%A1%C5%A1-ol%C5%A1iak-232196260/"
    );
  cy.get(byTestCy("github-link"))
    .should("have.attr", "href")
    .and("include", "https://github.com/katzohub/");
};
const minWidthScreen = () => {
  cy.get(byTestCy("btn-drawer")).click();
  cy.get(byTestCy("about-link")).eq(1).click();
  cy.url().should("include", "/about-me");
  cy.get(byTestCy("btn-drawer")).click();
  cy.get(byTestCy("project-link")).eq(1).click();
  cy.url().should("include", "/projects");
  cy.get(byTestCy("btn-drawer")).click();
  cy.get(byTestCy("contact-link")).eq(1).click();
  cy.url().should("include", "/contact-me");
  cy.get(byTestCy("btn-drawer")).click();
  cy.get(byTestCy("home-link")).eq(1).click();
  cy.url().should("include", "/");
  cy.get(byTestCy("btn-drawer")).click();
  cy.contains("_hello").should("exist");
  cy.contains("_about-me").should("exist");
  cy.contains("_projects").should("exist");
  cy.contains("_contact-me").should("exist");
  cy.get(byTestCy("btn-closed-drawer")).click();
  cy.contains("_hello").should("not.be.visible");
};

describe("Navigate tour", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Basic navigation home xl screen", () => {
    cy.viewport(1460, 750);
    fullWidtScreen();
  });
  it("Basic navigation home lg screen", () => {
    cy.viewport(1229, 750);
    fullWidtScreen();
  });
  it("Basic navigation home md screen", () => {
    cy.viewport(799, 750);
    minWidthScreen();
  });
  it("Basic navigation home sm screen", () => {
    cy.viewport(485, 750);
    minWidthScreen();
  });
});
