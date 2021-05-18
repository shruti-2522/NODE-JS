var  fs=require('fs');
fs.rename('b.txt','c.txt',function(err)
{
    if(err)throw err;
    console.log("file renamed");
});