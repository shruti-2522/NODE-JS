//Core Module:

const fs=require('fs');

//Create a File
//fs.writeFileSync("Read.txt","Hello");
//fs.writeFileSync("Read.txt","Hello,I Am Shruti Amrutkar....!!");
//console.log("File Created..");


//Append a File
//fs.appendFileSync("Read.txt","I am a student of MSC-II");
//console.log("Data append successfully..");

//Read A File
//const buf_data=fs.readFileSync("Read.txt");
//const org_data=buf_data.toString();
//console.log(org_data);

//Rename File
fs.renameSync("Read.txt","Temp.txt");
console.log("File Rename SuccessFully!!");