require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
    setTimeout(function() {fulfill('FULFILLED!')}, 330);
});

promise.then(console.log);