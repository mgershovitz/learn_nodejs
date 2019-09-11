var bl = require('bl')
var http = require('http');

let urls = process.argv.slice(2);
let data_queue = [];
let results_count = 0;

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(data_queue[i])
  }
}

function handle_url(url, order) {
	function handle_response(response) {
		function get_data(error, data) {
			if (error) {
				return console.log(error);
			}
			data_queue[order] = data.toString();
			results_count += 1
			if (results_count == 3) {
				printResults();
			}
		}
		response.pipe(bl(get_data));
	}
	data = http.get(url, handle_response)
}

for (let i=0; i<3; i++) {
	handle_url(urls[i], i);
}