let http = require("q-io/http");

http.read('http://localhost:7000').
    then(res => res.toString()).
    then(function (user_id) {
        return http.read('http://localhost:7001/' + user_id)
    }).
    then(res => JSON.parse(res)).
    then(console.log).
    done();