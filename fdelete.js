var fs=require('fs');
fs.unlink("b.txt",function(err){
    if(err)throw err;
    console.log("file deleted");

})