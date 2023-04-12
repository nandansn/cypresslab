describe("test group", () => {
  it("test", () => {
    cy.visit("https://foruiautomation.netlify.app/");
    cy.get("ul > a:nth-child(1)").should("be.visible");
    cy.get("ul > a[href='/counter']")
      .click()
      .then(() => {
        cy.get("div.contianer.btn button").then((els) => {
          expect(els.length).to.equal(3);
        });
      });
  });
});
