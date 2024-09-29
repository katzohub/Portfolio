import { byTestCy } from "../support/commands";

const allScreen = () => {
  cy.contains("I hope you like it and leave me a review,").should("exist");
  cy.contains(
    "I am also interested in technologies like, Node.js, Docker,"
  ).should("exist");
  cy.contains("Thank you for your time and have a nice day").should("exist");
  cy.contains("26").should("exist");
  cy.contains("const button = ").should("exist");
  cy.get(byTestCy("btn-interests")).click();
  cy.contains("Welcome to the section about my interests").should("exist");
  cy.contains(
    "I also enjoy watching movies and series and playing PlayStation,"
  ).should("exist");
  cy.get(byTestCy("btn-collapse-education")).click();
  cy.get(byTestCy("btn-primary-school")).click();
  cy.contains("Elementary School with Kindergarten Milana Kolibiara").should(
    "exist"
  );
  cy.contains("I am very glad that I could attend this school.").should(
    "exist"
  );
  cy.get(byTestCy("btn-high-school")).click();

  cy.contains("Welcome to the section about my high school").should("exist");
  cy.contains("and start learning to program.").should("exist");
  cy.get(byTestCy("btn-contact-dropdown")).click();
  cy.contains("tomas.olsiak@tom-dev.sk").should("be.visible");
  cy.contains("+421 915 515 974").should("be.visible");
  cy.get(byTestCy("mail-contact"))
    .should("have.attr", "href")
    .and("include", "mailto:tomas.olsiak@tom-dev.sk");

  cy.get(byTestCy("tel-contact"))
    .should("have.attr", "href")
    .and("include", "tel:+421915515974");
};

describe("Navigate tour", () => {
  beforeEach(() => {
    cy.visit("/about-me");
  });
  it("Basic navigation home xl screen", () => {
    cy.viewport(1460, 750);
    allScreen();
  });
  it("Basic navigation home lg screen", () => {
    cy.viewport(1229, 750);
    allScreen();
  });
  it("Basic navigation home md screen", () => {
    cy.viewport(799, 750);
    allScreen();
  });
  it("Basic navigation home sm screen", () => {
    cy.viewport(485, 750);
    allScreen();
  });
});
