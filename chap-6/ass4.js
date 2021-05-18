const fs=require('fs');
fs.writeFile('a.txt','hello...',function(err)
{
    if(err)
    {
        throw  err;
    }
    console.log("data written to sucessfully");
});