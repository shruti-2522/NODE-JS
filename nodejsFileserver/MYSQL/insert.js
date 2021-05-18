//Insert Data:
var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    pwd:'',
    database:'student'
});

con.connect(function(err){

    if(err)throw err;
    console.log("connection establish....");

    var sql="insert into stud_info(name,roll_no)values('shruti',1)";
    con.query(sql,function(err,res){
        if(err)throw err;
        console.log('Inserted record sucessfully');
    })
})