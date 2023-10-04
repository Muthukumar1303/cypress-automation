class Utilities {
  navigate(path) {
    cy.visit(path);
  }
  textInput(queryText, text) {
    cy.get(queryText).clear().type(text);
    return this;
  }

  clickButton(queryText, options = {}) {
    cy.get(queryText, options).click();
  }
}
export default Utilities;
