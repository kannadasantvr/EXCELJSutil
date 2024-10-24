describe('SauceDemo Login Test', () => {
  let loginData = []; // Store Excel data

  before(() => {
    // Use the custom command to read the Excel file
    cy.readExcel('loginData.xlsx', 'Sheet1').then((data) => {
      loginData = data; // Store the data for use in tests
      //cy.log(JSON.stringify(loginData)); // Log to verify data
    });
  });

  it('Login tests with Excel data', () => {
    loginData.forEach((user) => {
      const Url = Cypress.env('Url')
         cy.visit(Url)

      // Use data from Excel to fill the form
      cy.get('input#user-name').type(user.Username);
      cy.get('[data-test="password"]').type(user.Password);
      cy.get("input#login-button").click()
      cy.get('[class="inventory_list"]').contains(user.product).click()
      cy.get('.btn_primary').click()
      cy.wait(1000)
      cy.go('back')
      // cy.get('[class="inventory_list"]').contains(user.product2).click()
      // cy.get('.btn_primary').click()
      // cy.go('back')
      // cy.get('[class="inventory_list"]').contains(user.product3).click()
      // cy.get('.btn_primary').click()
      // cy.go('back')
      cy.get('[class="inventory_item"]').eq(3).contains('ADD TO CART').click()
      cy.contains('.inventory_item_name', 'Test.allTheThings() T-Shirt (Red)').parents('.inventory_item').find('.btn_primary').click();


      // // Validate success or error message
      // if (user.Username === 'locked_out_user') {
      //   cy.get('[data-test="error"]').should('be.visible');
      // } else {
      //   cy.url().should('include', '/inventory.html');
      // }
    });
  });
});





