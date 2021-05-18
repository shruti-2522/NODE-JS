
//Check if a directory exisists:

//Method-1:fs.existsSync()

const fs=require("fs");
try
{
if(fs.existsSync('\a.txt'))
{
        console.log("director exist");
    }
    else
    {
        console.log('directoy does  not exisis');
    }
}
    catch(e)
    {
        console.log("an  error  occured");
    };
