var http = require("http");

var server = http.createServer(function(request, response) {

    if(request.url==='/'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>Home</p></body></html>');
        response.end();
    }else if (request.url === '/exit'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>Exit</p></body></html>');
        response.end();
    }else {
        response.writeHead(404,{'Content-Type':'text/html'});
        response.write('<html><body><p>not found</p></body></html>');
        response.end();
    }
    
});

server.listen(4000);

console.log("Corriendo proyecto")