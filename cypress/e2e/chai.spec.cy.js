describe("should group test", () => {
  it("", () => {
    let name = "test";
    let url = Cypress.config().baseUrl;
    cy.visit(url).then(() => {
      expect(name).to.equal("test");
    });
  });
});
