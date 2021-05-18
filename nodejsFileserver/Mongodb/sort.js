var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';

MongoClient.connect(url,function(err,db){
    if(err)throw err;

    var dbo=db.db('student');
    var msort={name:-1};
   // var msort={name:1};
    dbo.collection('stud_info').find().sort(msort).toArray(function(err,res){
        if(err)throw err;
        console.log(res);
    });
});