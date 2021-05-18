var mysql=require('mysql');

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    pwd:'',
    database:'student'
});

con.connect(function(err){
    if(err)throw err;

    var sql="update stud_info set name='shruti' where name='pd'";
    con.query(sql,function(err,res){
        if(err)throw err;
        console.log(res.affectedRows);
    })
})