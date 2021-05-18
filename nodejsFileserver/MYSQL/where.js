var mysql=require('mysql');

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    pwd:'',
    database:'student'
});

con.connect(function(err){
    if(err)throw err;
    console.log("connection estaablished....");

    var name="niki"

    //con.query("select * from stud_info where roll_no=1",function(err,res,fields)
    
    //con.query("select * from stud_info where name LIKE'H%'",function(err,res,fields)
    con.query("select * from stud_info where name="+mysql.escape(name),function(err,res){
        if(err)throw err;
        console.log(res);
    });
});