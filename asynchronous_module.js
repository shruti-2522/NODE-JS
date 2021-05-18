//Asymchronous operaions:

const fs=require("fs");

//Create A file
//fs.writeFile("Temp1.txt","I m learning aysncornous file module",(err) =>{
//    console.log("File created successfully!!");
//});

//Append file
//fs.appendFile("Temp1.txt"," Append data",(err) => {
//console.log("Append data");
//});

//Read File
fs.readFile("Temp1.txt","utf8",(err,q) =>
{
console.log(q);    
console.log("Read Data successfully!!");
});