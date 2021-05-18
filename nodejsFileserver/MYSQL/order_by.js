var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    pwd:'',
    database:'student'
});

con.connect(function(err,res){
    if(err)throw err;
    console.log("connection establisheed");

   // var sql="select * from stud_info order by name";
   //records are print in descending order:
   var sql="select * from stud_info order by name desc";
    con.query(sql,function(err,res){
        if(err) throw err;
        console.log(res);
    });
});