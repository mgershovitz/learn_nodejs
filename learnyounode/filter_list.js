const fs = require('fs');
const path = require('path');

path_to_dir = process.argv[2];
suffix = '.' + process.argv[3];

fs.readdir(path_to_dir, function printFilesNames(error, l) {
  if (error) {
    console.log(error);
  }
  l.forEach(function(f) {
    if (path.extname(f) == suffix) {
      console.log(f);
    }
  });
});
