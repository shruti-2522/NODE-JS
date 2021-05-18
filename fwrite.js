var fs=require('fs');
fs.writeFile('a.txt',"Hello World",function(err)
{
 if(err)throw err;

 console.log('saved');
})