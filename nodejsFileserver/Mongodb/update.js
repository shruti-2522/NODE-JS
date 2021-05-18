var MongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err)throw err;

    var dbo=db.db('student');
    var oval={name:'shruti'};
    var nval={$set:{name:'shrutika',addr:'dhule'}};
    dbo.collection('stud_info').updateOne(oval,nval,function(err,res){
        if(err)throw err;
        console.log("updated...");

    })
})