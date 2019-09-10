var http = require('http');

url = process.argv[2];

function handle_response(response) {
	response.on("data", function logData(data) {
		console.log(data.toString())
	})
}

http.get(url, handle_response)