const { readExcelData } = require('../support/readExcel.js');

describe('SauceDemo Login Test', () => {
  let loginData; // To store the Excel data
  before(() => {
    // Read the Excel file before the test starts
    const filePath = 'cypress/fixtures/loginData.xlsx';
    loginData = readExcelData(filePath, 'Sheet1'); // Specify sheet name
  });

  //loginData.forEach((user) => {
    it(`Login test for ${user.Username}`, () => {
      cy.visit('https://www.saucedemo.com/');
      // Input username and password from Excel data
      cy.get('[data-test="username"]').type(user.Username);
      cy.get('[data-test="password"]').type(user.Password);

    });
  });








  /// <reference types = "cypress"/>
import * as XLSX from 'xlsx';

describe('Reading and Using the datas from Excell ',()=>{

it('Get loging datas from excel', ()=>{

    cy.visit('https://www.saucedemo.com/v1/')
    cy.fixture('Book.xlsx', 'binary').then((binarydata)=>{

        const wb = XLSX.read(binarydata,{type: 'binary'})

        const particular = wb.SheetNames[0]

        const requiredsheet = wb.Sheets[particular]

        const data = XLSX.utils.sheet_to_json(requiredsheet, {header:1})

        cy.wrap(data).then((ed)=>{

            ed.slice(1).forEach(row=>{

                const [username,password] = row

              
      
        cy.get("input#user-name").type(username)
        cy.get("input#password").type(password)
        cy.get("input#login-button").click()
            })
        })

    })




})


})

