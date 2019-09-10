var http = require('http');

url = process.argv[2];

function handle_response(response) {
	response.setEncoding('utf8')
	response.on("data", console.log)
	response.on('error', console.error)
}

http.get(url, handle_response).on('error', console.error)