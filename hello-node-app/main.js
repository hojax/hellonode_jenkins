// load the http module
var http = require('http');

// configure our http server
var server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("<p><b>Hello</b> get into devops</p>");
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listneing at http://127.0.0.1:8000/");