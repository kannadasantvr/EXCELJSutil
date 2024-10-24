const exceljs = require('exceljs');

async function writeExcel(Searchtext, replacetext, change, filepath) {
    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile(filepath); // Load the Excel file

    const worksheet = workbook.getWorksheet(1); // Get the first worksheet

    const output = await readExcel(worksheet, Searchtext); // Search for the text

    if (output.row === -1 || output.column === -1) {
        console.error(`Search text "${Searchtext}" not found.`);
        return;
    }

    console.log(`Found "${Searchtext}" at Row: ${output.row}, Column: ${output.column}`);

    // Calculate the target row and column
    const targetRow = output.row + change.rowchange;
    const targetCol = output.column + change.colchange;

    const cell = worksheet.getCell(targetRow, targetCol); // Access the target cell
    cell.value = replacetext; // Update the cell value

    // Center-align the content
    cell.alignment = { horizontal: 'center', vertical: 'middle' };

    await workbook.xlsx.writeFile(filepath); // Save the changes
    console.log(`Updated cell at Row: ${targetRow}, Column: ${targetCol} with value: ${replacetext}`);
}

async function readExcel(worksheet, Searchtext) {
    let output = { row: -1, column: -1 }; // Default if not found

    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === Searchtext) {
                output = { row: rowNumber, column: colNumber }; // Store the found row and column
            }
        });
    });

    return output; // Return the result
}

// Call the function to change 400 back to "Sl.no" and align it to the center
writeExcel('Keerthana', 'Vasu', { rowchange: 10, colchange: 3 }, 'C:/Users/kanna/OneDrive/Documents/Interview calls.xlsx');
