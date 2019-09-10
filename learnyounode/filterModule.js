const fs = require('fs');
const path = require('path');


module.exports = function filesFilter(path_to_dir, suffix, callback_func) {
	suffix = '.' + suffix;
	var res = []

	function getFilesNames(error, l) {
		if (error) {
			return callback_func(error)
		} else {
			l.forEach(function fileCheck(file_name) {
				if (path.extname(file_name) == suffix) {
					res.push(file_name);
				}
			})
			return callback_func(null, res)
		}
	}
	
	fs.readdir(path_to_dir, getFilesNames) 

	
}
