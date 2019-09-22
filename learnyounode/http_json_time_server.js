var http = require('http'),
    port = process.argv[2],
    url = require('url');


function handle_time_req(date) {
    console.log(date)
    return JSON.stringify({'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds()});
}
function handle_unix_req(date) {
    return JSON.stringify({'unixtime':date.getTime()});
}

function listener(req, res) {
    parsed_req = url.parse(req.url);

    if (!parsed_req.pathname.startsWith('/api')) {
        res.end("Not a valid route");
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        time_query = parsed_req['query'].split('=')[1];
        date = new Date(time_query);
        if (parsed_req.pathname == '/api/parsetime') {
            res.end(handle_time_req(date))
        } else if (parsed_req.pathname == '/api/unixtime') {
            res.end(handle_unix_req(date));
        }
    }

    
}

var server = http.createServer(listener);

server.listen(port);
