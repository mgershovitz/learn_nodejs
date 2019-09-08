var fs = require('fs')


path_to_file = process.argv[2];

function printLinesCount(lines_count) {
  console.log(lines_count);
};

function countLines(callback_func){
  fs.readFile(path_to_file, function countFileLines(error, data) {
    if (error) {
      return console.log(error);
    }
    lines = data.toString().split('\n').length - 1;
    callback_func(lines);
  })

};

countLines(printLinesCount);
