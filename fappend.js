//Create a new file using the appendFile() method:
var fs=require('fs');
fs.appendFile('a.txt','New file will be created',function(err)
{
    if(err)throw err;
    console.log("saved");

});