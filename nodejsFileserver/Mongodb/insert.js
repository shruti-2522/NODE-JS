var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    console.log("Connection Established....");

    var dbo=db.db('student');

    var obj=[{name:'shruti',addr:'dhule'},{name:'Hitesh',addr:'dabli'}
    ,{name:'Niki',addr:'pachora'}
    ,{name:'rushali',addr:'malegaon'},
    {name:'vishakha',addr:'malegaon'}
    ,{name:'pd',addr:'tehere'}];
    dbo.collection('stud_info').insertMany(obj,function(err,res){
        if(err)throw err;
        console.log(res);
        db.close();
    });
    });