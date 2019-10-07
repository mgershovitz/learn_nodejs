let http = require("q-io/http");

http.read('http://localhost:1337').
    then(res => JSON.parse(res)).
    then(console.log).
    done();