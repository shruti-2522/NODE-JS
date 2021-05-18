//Check if a directory exisists:

//Method-1:fs.acess()

const fs=require("fs");
fs.access("\a.txt",function(error)
{
    if(error)
    {
        console.log("directory does not exisits");
    }
    else
    {
        console.log('directoy  exisis');
    }
})