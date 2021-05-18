import { createServer } from 'http';
createServer(function(req,res){
  
        res.writeHead(200,{'content-type':'text/html'});
        res.write("hello world");
        res.end();
  
}).listen(8000);