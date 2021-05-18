var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    pwd:'',
    database:'student'

});

con.connect(function(err){
    if(err)throw err;
    console.log("connection Established...");

    con.query("select * from stud_info",function(err,result,fields){
        if(err)throw err;
        console.log(result);
    })
})