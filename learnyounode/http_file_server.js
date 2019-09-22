var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file_path = process.argv[3];

function listener(req, res) {
    const stream = fs.createReadStream(file_path);
    stream.pipe(res);
}

var server = http.createServer(listener);

server.listen(port);
