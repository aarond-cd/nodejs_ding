var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made:'+ req.url);
    if(req.url === '/index'|| req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+ '/index.html').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+ '/contact.html').pipe(res);
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+ '/error.html').pipe(res);
    }
});

server.listen(3000);
console.log('server running on 3000 port');