var fs=require('fs');
fs.rename("a.txt","b.txt",function(err){
    if(err)throw err;
    console.log("file rename");
})