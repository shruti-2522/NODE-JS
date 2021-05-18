const { findSourceMap } = require('module');
var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    pwd:'',
    database:'student'
});

con.connect(function(err){
    if (err)throw err;

    //sql="select * from stud_info Limit 3";
   // sql="select * from stud_info Limit 3 offset 2";
   sql="select * from stud_info Limit 2,3";
    con.query(sql,function(err,res){
        console.log(res);
    })
})