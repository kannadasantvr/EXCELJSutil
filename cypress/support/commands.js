// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {  })
const XLSX = require('xlsx');

// Custom command to read Excel and convert it to JSON
Cypress.Commands.add('readExcel', (filePath, sheetName) => {
  return cy.fixture(filePath, 'binary').then((content) => {
    const workbook = XLSX.read(content, { type: 'binary' }); // Read workbook
    const sheet = workbook.Sheets[sheetName]; // Access specific sheet
    const jsonData = XLSX.utils.sheet_to_json(sheet); // Convert to JSON
    return jsonData; // Return the data
  });
});
