//Print msg on browser.
var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("Hello World");
    

}).listen(8000,console.log('server is running....'));