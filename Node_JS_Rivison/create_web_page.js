var http=require('http');
var page=`
<h1>Web Page</h1><br><br>
<input type='text' /><br><br>
<input type='text'/>`;
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(page);
}).listen(8000);