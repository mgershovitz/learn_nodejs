var files_filter = require('./filterModule.js')

const fs = require('fs');
const path = require('path');

path_to_dir = process.argv[2];
suffix = process.argv[3];

function printFileNames(error, result) {
	if (error) {
		console.log(error);
	} else {
		result.forEach(function printName(file_name) {
			console.log(file_name);
		})
		
	}
}

files_filter(path_to_dir, suffix, printFileNames)