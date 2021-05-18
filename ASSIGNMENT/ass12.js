const { RSA_NO_PADDING } = require('constants');
var http = require('http')
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("server running");
    res.end();
});

server.listen(9000,console.log("server is running")); 
