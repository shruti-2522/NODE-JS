var mysql=require('mysql');


var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    pwd:' ',
    database:'student'
});

con.connect(function(err){
    if (err)throw err;


    var sql="delete from stud_info where name='niki'";
     con.query(sql,function(err,res){
        if(err)throw err;
        console.log("deleted rows:"+res.affectedRows);
    }

    );


});