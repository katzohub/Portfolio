const allScreen = () => {
  cy.contains("404 Not Found").should("be.visible");
  cy.contains("The page that does not exist!").should("be.visible");
};

describe("Navigate tour", () => {
  beforeEach(() => {
    cy.visit("/projectsss");
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
