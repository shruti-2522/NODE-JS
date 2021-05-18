var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    console.log("......");

    var dbo=db.db('student');
    var qry={name:'pd'};
    dbo.collection('stud_info').deleteOne(qry,function(err,res){
        if(err)throw err;
        console.log(res);;

    });

});