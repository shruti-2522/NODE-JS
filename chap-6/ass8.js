var  fs=require('fs');
fs.appendFile('b.txt','this is new  text',function(err)
{
    if(err)throw err;
    console.log("file Updated");
});