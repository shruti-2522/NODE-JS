var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    pwd:'',
    dataabse:'student'
});

con.connect(function(err){
    if(err)throw err;

    sql="drop table customer";
    con.query(sql,function(err,res){
        console.log("table deleted");

    });
});