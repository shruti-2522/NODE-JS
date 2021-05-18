var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/Student";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log("Create Database");

    var dbo=db.db('student');
    dbo.createCollection("Stud_info",function(err,res){
        if(err)throw err;
        console.log("Collection Created");
        db.close();
    });

});