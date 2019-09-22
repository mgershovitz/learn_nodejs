var http = require('http'),
    map = require('through2-map'),
    port = process.argv[2],
    capitalize = map(function (data) {
        return data.toString().toUpperCase();
    });


function listener(req, res) {
    if (req.method === "GET") {
        res.end("Only send me a post");
    } else if (req.method === "POST") {
        req.pipe(capitalize).pipe(res);
    }
}

var server = http.createServer(listener);

server.listen(port);
