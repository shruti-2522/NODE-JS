var mysql=require('mysql');
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
    console.log("connection established...");

    var sql="INSERT INTO stud_info (name, roll_no) VALUES ?";
    var val=[
        ['niki',2],

        ['hitesh',3],['pd',4],['rushali',5]
        
    ];

    con.query(sql,[val],function(err,res){
        if(err)throw err;
        console.log("insert data sucessfully"+res.affectedRows);
    })
     

});