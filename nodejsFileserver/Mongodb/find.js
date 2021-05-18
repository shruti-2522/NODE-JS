var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    console.log("Connection Established.....");

    var dbo=db.db('student');
    dbo.collection('stud_info').find({}).toArray(function(err,res){
        if(err)throw err;
        console.log(res);
        db.close();
    });
});