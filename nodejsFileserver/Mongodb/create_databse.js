var MongoClient=require('mongodb').MongoClient();
var url="mongodb://locaalhost:27017//Student";

MongoClient.connect(url,function(err,db){
    if(err)throw error;
    console.log("Database Creaated");
    db.close();
});