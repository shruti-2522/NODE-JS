var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err)throw err;

    var dbo=db.db('student');
    dbo.dropCollection('stud_info',function(err,delok)
    {
        if(err)throw err;
        console.log(delok);
    });
});