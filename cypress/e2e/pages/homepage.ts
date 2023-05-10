class HomePage {
  constructor() {}

  open() {
    cy.visit("/");
  }

   sumTwoNumbers(a: number, b: number) {
    return a + b;
  }

  displayListOfNumbers(a: number, b: number) {  
  }
}

export default HomePage;
