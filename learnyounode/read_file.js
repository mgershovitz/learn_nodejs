const fs = require('fs');
path_to_file = process.argv[2];
buf = fs.readFileSync(path_to_file);
lines = buf.toString();
lines = lines.split('\n').length - 1;

console.log(lines);
