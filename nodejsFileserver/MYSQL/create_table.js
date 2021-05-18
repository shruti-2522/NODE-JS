var mysql=require('mysql');
const { isBuffer } = require('util');
var con=mysql.createConnection(

    {
        host:'localhost',
        user:'root',
        pwd:'',
        database:'student'
    }
);

con.connect(function(err){
    if(err)throw err;
    console.log("Connection Established....");

    var sql=('create table stud_info(name varchar(20),roll_no int)');
    con.query(sql,function(err,res){
       if(err)throw err;
        console.log("table created");
    });
});