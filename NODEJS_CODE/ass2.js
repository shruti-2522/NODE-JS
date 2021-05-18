//Create a  New  directory

const fs=require("fs");
fs.mkdir('.\b',function(error)
{
    if(error)
    {
        console.log("Error");
    }
    else
    {
        console.log('New directory will be created');
    }}
    )