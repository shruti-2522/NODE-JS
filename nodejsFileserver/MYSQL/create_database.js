var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
});

con.connect(function(err){

    if (err)throw err;
    console.log("Connection establish..");
    con.query("create database student", function(err,res){
        if (err)throw err;
        console.log("Database CCreated");

    })
})