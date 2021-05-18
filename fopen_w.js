var fs=require('fs');
fs.open('a.txt','w',function(err,file)
{
    if (err)throw err;
    console.log("Saved");
})