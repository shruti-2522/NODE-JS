const { connect } = require('http2');

var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    console.log('coneection established..');

    var dbo=db.db('student');
    var query={addr:'dabli'};

    dbo.collection('stud_info').find({query}).toArray(function(err,res){
        if(err) throw err;
        console.log(res);

    });
});