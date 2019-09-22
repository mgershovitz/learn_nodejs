var strftime = require('strftime');
var net = require('net');

var port = process.argv[2];

function listener(socket) {
    var d = new Date();
    date_str = strftime('%Y-%m-%d %H:%M', d) + '\n';
    socket.end(date_str);
}

 
 var server = net.createServer(listener);
 server.listen(port);