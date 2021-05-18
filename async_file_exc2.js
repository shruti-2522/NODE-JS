//Asynchronouse file excercise

const fs=require('fs');

//Create a Folder
//fs.mkdir("Shruti",(err) =>
//{
//  console.log("Creaated Folder succesfully");
//});

//Create a file
//fs.writeFile("Shruti/Text.txt","Data",(err) =>
//{
 //   console.log("Create file successfully !!!");
//});

//Append Daata
//fs.appendFile("Shruti/Text.txt"," is append by appendFile() method",(err) =>
//{
//    console.log("Data append successfully!!");
//});

//Read Data
//fs.readFile("Shruti/Text.txt","utf-8", (err,data) =>
//{
 //console.log(data);
 //console.log("Data red successfully!!");
//});

//Delete Data
//fs.unlink("Shruti/Text.txt",(err) =>
//{
//console.log("file is deleted");
//});

//Delete Folder
fs.rmdir("Shruti",(err) =>
{
    console.log("Folder delted");
});