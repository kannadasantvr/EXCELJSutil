//Aproch 1//
// const exceljs=require('exceljs')
// const workbook=new exceljs.Workbook()
// workbook.xlsx.readFile('C:/Users/kanna/OneDrive/Documents/testexcel.xlsx').then(function(){
//     const worksheet=workbook.getWorksheet(1)
//     worksheet.eachRow((row,rowNumber)=>{
//         row.eachCell((cell,colNumber)=>{
//             console.log(cell.value)
//         })
//     })
// })

//Approch 2
// const exceljs=require('exceljs')
// async function excel() {
//     let output={row:-1,column:-1}
//     const workbook=new exceljs.Workbook()
//     await workbook.xlsx.readFile('C:/Users/kanna/OneDrive/Documents/testexcel.xlsx')
//         const worksheet=workbook.getWorksheet(1)
//         worksheet.eachRow((row,rowNumber)=>{
//             row.eachCell((cell,colNumber)=>{
//                 if(cell.value === "Kanna")
//                     {
//                         output.row=rowNumber;
//                         output.column=colNumber;
                        
//                     }
//             })
//         })   
//         const cell =worksheet.getCell(output.row,output.column)
//         cell.value="Banana"
//        await workbook.xlsx.writeFile('C:/Users/kanna/OneDrive/Documents/testexcel.xlsx')

// }
// excel();

//approch 3

// const ExcelJS = require('exceljs');

// // Create an instance of Workbook
// const workbook = new ExcelJS.Workbook();

// // Read the Excel file
// workbook.xlsx.readFile('C:/Users/kanna/OneDrive/Documents/testexcel.xlsx') // Replace 'sample.xlsx' with your Excel file name
//   .then(() => {
//     const worksheet = workbook.getWorksheet(1); // Get the first worksheet (by index)

//     // Ensure worksheet exists
//     if (!worksheet) {
//       throw new Error("Worksheet not found!");
//     }

//     // Iterate over each row
//     worksheet.eachRow((row, rowNumber) => {
//       console.log(`Row ${rowNumber}: ${row.values}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Error reading Excel file:", error);
//   });




//final with not hardcode //

const exceljs=require('exceljs')
async function writeExcel(Searchtext,replacetext,change,filepath) {
    
    const workbook=new exceljs.Workbook()
    await workbook.xlsx.readFile(filepath)
        const worksheet=workbook.getWorksheet(1)
        const output=await readExcel(worksheet,Searchtext)
        const cell =worksheet.getCell(output.row,output.column+change.colchange)
        cell.value=replacetext
       await workbook.xlsx.writeFile(filepath)
       

}
//
async function readExcel(worksheet,Searchtext) {
    let output={row:-1,column:-1}
    worksheet.eachRow((row,rowNumber)=>{
        row.eachCell((cell,colNumber)=>{
            if(cell.value === Searchtext)
                {
                    output.row=rowNumber;
                    output.column=colNumber;
                    
                }
        })
    })  
    return output;
}
writeExcel('400', 'Sl.no',{rowchange:0,colchange:2},'C:/Users/kanna/OneDrive/Documents/testexcel.xlsx');