const fs=require("fs");
fs.rmdir('./c',function(err)
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("directory  was deleted");
    }
})