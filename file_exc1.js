const fs=require('fs');

//Create a Folder
//fs.mkdirSync("Thapa");
//console.log("Create folder successfully!!");

//Create a file
//fs.writeFileSync("Thapa/file.txt","File Created");
//console.log("File Create successfully");

//Add data after exisiting data
//fs.appendFileSync("Thapa/file.txt","Append Data");
//console.log("Data append successfully!!");

//To read Data without getting buffer data
//const data=fs.readFileSync("Thapa/file.txt","utf8");
//console.log(data);

//Rename the file
//fs.renameSync("thapa/file.txt","./bio.txt");
//console.log("Rename file succssfully!!");

//Delete file
//fs.unlinkSync("./bio.txt");
//console.log("Deleted succesfully !!");

//Delete Folder
fs.rmdirSync("Thapa");
console.log("Delete Folder succesfully");

