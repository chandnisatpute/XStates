describe('CitySelector Component', () => {
    it('should load the page and display the heading', () => {
      cy.visit('http://localhost:3000'); // change if your dev server runs on another port
      cy.contains('Select Location').should('exist');
    });
  });
  