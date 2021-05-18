var http=require('http');
http.createServer(function(req,res){
    var data=[
        {name:'shruti',email:'shrutiamrutkar177@gmail.com'},
        {name:'pratik',email:'pratikamrutkar01@gmail.com'}
    ];
    res.writeHead(200,{'content-type':'text/html'});
    res.write(JSON.stringify(data));
    res.end;
}).listen(8000);