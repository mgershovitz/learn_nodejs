var bl = require('bl')
var http = require('http');

url = process.argv[2];

function handle_response(response) {
	function countAndPrintData(error, data) {
		if (error) {
			console.log(error)
		} else {
			data = data.toString();
			char_count = data.length;
			console.log(char_count);
			console.log(data)
		}
	}
	response.pipe(bl(countAndPrintData))
}

http.get(url, handle_response).on('error', console.error)